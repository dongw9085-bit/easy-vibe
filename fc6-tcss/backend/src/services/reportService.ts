/**
 * M5 报表生成服务 — EBIT 汇总、BU KPI、风险评估
 */
import { PrismaClient, BusinessUnit } from '@prisma/client'
import * as XLSX from 'xlsx'
import { kpiService } from './kpiService'
import { marketEngine } from './forecastEngine'

const prisma = new PrismaClient()

const BU_LABELS: Record<string, string> = {
  DOMESTIC_MEDICAL: '国内人医',
  ECOMMERCE:        '电商',
  INTL_PUBLIC:      '国际公卫',
  INTL_PRIVATE:     '国际非公卫',
  PET:              '宠物',
  OPERATIONS:       '运营',
  RD:               '研发',
}

export class ReportGeneratorService {
  /**
   * 公司级 EBIT 汇总报表
   */
  async generateEBITSummary(versionId: string) {
    const businessUnits = await prisma.revenueRecord
      .findMany({ where: { versionId }, select: { bu: true }, distinct: ['bu'] })
      .then(r => r.map(x => x.bu))

    const buResults = await Promise.all(
      businessUnits.map(bu => marketEngine.calculateBUEBIT(versionId, bu))
    )

    const total = buResults.reduce(
      (s, r) => ({
        revenue:     s.revenue     + r.revenue,
        grossProfit: s.grossProfit + r.grossProfit,
        expense:     s.expense     + r.expense,
        ebit:        s.ebit        + r.ebit,
      }),
      { revenue: 0, grossProfit: 0, expense: 0, ebit: 0 }
    )

    return {
      versionId,
      generatedAt: new Date().toISOString(),
      byBU: buResults.map(r => ({ ...r, buLabel: BU_LABELS[r.bu] || r.bu })),
      total: {
        ...total,
        grossMargin: total.revenue > 0 ? total.grossProfit / total.revenue : 0,
        ebitRate:    total.revenue > 0 ? total.ebit / total.revenue : 0,
      }
    }
  }

  /**
   * 生成 BU 级 KPI 报表
   */
  async generateBUReport(versionId: string, bu: BusinessUnit) {
    const [ebit, perHead] = await Promise.all([
      marketEngine.calculateBUEBIT(versionId, bu),
      (await import('./forecastEngine')).hcEngine.calculatePerHeadRevenue(versionId, bu)
    ])

    const hcPlans = await prisma.hCPlan.findMany({ where: { versionId, bu } })
    const capex   = await prisma.capexPlan.findMany({ where: { versionId, bu } })

    const totalFTE = hcPlans.length
      ? hcPlans.reduce((s, h) => s + h.fte, 0) / hcPlans.length
      : 0
    const totalCB  = hcPlans.reduce((s, h) => s + h.totalCB, 0)
    const totalCapex = capex.reduce((s, c) => s + c.amount, 0)

    return {
      bu,
      buLabel: BU_LABELS[bu] || bu,
      financial: ebit,
      headcount: { totalFTE, totalCB, perHeadRevenue: perHead },
      capex: { totalCapex, projects: capex },
    }
  }

  /**
   * 风险评估报告（KPI 预警 + AI 建议）
   */
  async generateRiskReport(versionId: string) {
    const alertReport = await kpiService.generateAlertReport(versionId)

    const riskMatrix = {
      HIGH:   alertReport.alerts.filter(a => a.level === 'RED'),
      MEDIUM: alertReport.alerts.filter(a => a.level === 'YELLOW'),
    }

    return {
      versionId,
      generatedAt: new Date().toISOString(),
      overallRisk: riskMatrix.HIGH.length > 3 ? 'HIGH' : riskMatrix.HIGH.length > 0 ? 'MEDIUM' : 'LOW',
      summary: alertReport.summary,
      riskMatrix,
      suggestions: alertReport.aiSuggestions,
      nextSteps: this.buildNextSteps(alertReport.alerts)
    }
  }

  private buildNextSteps(alerts: any[]): string[] {
    const steps: string[] = []
    if (alerts.some(a => a.kpiCode === 'GROSS_MARGIN' && a.level === 'RED'))
      steps.push('优先行动：与销售团队评审定价策略，识别低毛利 SKU')
    if (alerts.some(a => a.kpiCode === 'DSO' && a.level === 'RED'))
      steps.push('优先行动：启动应收账款专项清理，重点关注账期 > 60 天客户')
    if (alerts.some(a => a.kpiCode === 'EBIT_RATE'))
      steps.push('建议行动：制定费用削减计划，分解到各 BU 责任人')
    if (alerts.some(a => a.kpiCode === 'MOM_CHANGE'))
      steps.push('数据质量：请各 BU 核实环比异常数据，补充说明')
    if (steps.length === 0)
      steps.push('当前版本整体风险可控，建议按计划推进审批流程')
    return steps
  }

  /**
   * 导出完整 Excel 报表（多 Sheet）
   * Sheet: 封面 | 收入预测 | 费用预测 | HC 计划 | Capex | EBIT 汇总
   */
  async exportFC6Report(versionId: string): Promise<Buffer> {
    const [version, revenues, expenses, hcPlans, capexPlans, ebitSummary] = await Promise.all([
      prisma.forecastVersion.findUnique({ where: { id: versionId } }),
      prisma.revenueRecord.findMany({ where: { versionId }, orderBy: [{ bu: 'asc' }, { month: 'asc' }] }),
      prisma.expenseRecord.findMany({ where: { versionId }, orderBy: [{ bu: 'asc' }, { month: 'asc' }] }),
      prisma.hCPlan.findMany({ where: { versionId }, orderBy: [{ bu: 'asc' }, { month: 'asc' }] }),
      prisma.capexPlan.findMany({ where: { versionId }, orderBy: [{ bu: 'asc' }, { month: 'asc' }] }),
      this.generateEBITSummary(versionId),
    ])

    const wb = XLSX.utils.book_new()

    // ── Sheet 1: 封面 ──
    const coverData = [
      ['FC6+6 TCSS — 全公司预测支持系统'],
      ['版本', version?.name || versionId],
      ['年度', version?.year || ''],
      ['周期', version?.period || ''],
      ['状态', version?.status || ''],
      ['生成时间', new Date().toLocaleString('zh-CN')],
    ]
    XLSX.utils.book_append_sheet(wb, XLSX.utils.aoa_to_sheet(coverData), '封面')

    // ── Sheet 2: 收入预测 ──
    const revHeader = ['BU', '产品线', 'SKU', '月份', '数据类型', '基础销量', '增长销量', '单价', '金额(万)', '毛利率%', 'DSO天数']
    const revRows = revenues.map(r => [
      BU_LABELS[r.bu] || r.bu, r.productLine, r.sku || '', r.month, r.dataType,
      r.baseVolume, r.growthVolume, r.price,
      (r.amount / 10000).toFixed(2),
      (r.grossMargin * 100).toFixed(1) + '%',
      r.dso || ''
    ])
    XLSX.utils.book_append_sheet(wb, XLSX.utils.aoa_to_sheet([revHeader, ...revRows]), '收入预测')

    // ── Sheet 3: 费用预测 ──
    const expHeader = ['BU', '费用类别', '子类别', '月份', '数据类型', '金额(万)', '备注']
    const expRows = expenses.map(e => [
      BU_LABELS[e.bu] || e.bu, e.category, e.subCategory || '', e.month, e.dataType,
      (e.amount / 10000).toFixed(2), e.note || ''
    ])
    XLSX.utils.book_append_sheet(wb, XLSX.utils.aoa_to_sheet([expHeader, ...expRows]), '费用预测')

    // ── Sheet 4: HC 计划 ──
    const hcHeader = ['BU', '部门', '月份', '人数', 'FTE', '基本薪资(万)', '奖金(万)', '社保(万)', 'C&B合计(万)']
    const hcRows = hcPlans.map(h => [
      BU_LABELS[h.bu] || h.bu, h.department, h.month, h.headcount, h.fte,
      (h.baseSalary / 10000).toFixed(2), (h.bonus / 10000).toFixed(2),
      (h.insurance / 10000).toFixed(2), (h.totalCB / 10000).toFixed(2)
    ])
    XLSX.utils.book_append_sheet(wb, XLSX.utils.aoa_to_sheet([hcHeader, ...hcRows]), 'HC计划')

    // ── Sheet 5: Capex ──
    const capexHeader = ['BU', '项目名称', '类别', '月份', '投资额(万)', '折旧月数', '月折旧(万)', '效率提升%', 'ROI%']
    const capexRows = capexPlans.map(c => [
      BU_LABELS[c.bu] || c.bu, c.projectName, c.category, c.month,
      c.amount, c.depreciationMonths, c.monthlyDepreciation.toFixed(2),
      c.efficiencyGain || '', c.roi || ''
    ])
    XLSX.utils.book_append_sheet(wb, XLSX.utils.aoa_to_sheet([capexHeader, ...capexRows]), 'Capex计划')

    // ── Sheet 6: EBIT 汇总 ──
    const ebitHeader = ['BU', '收入(万)', '毛利润(万)', '毛利率%', '费用(万)', 'EBIT(万)', 'EBIT率%']
    const ebitRows = ebitSummary.byBU.map(r => [
      r.buLabel,
      (r.revenue / 10000).toFixed(2),
      (r.grossProfit / 10000).toFixed(2),
      (r.grossMargin * 100).toFixed(1) + '%',
      (r.expense / 10000).toFixed(2),
      (r.ebit / 10000).toFixed(2),
      (r.ebitRate * 100).toFixed(1) + '%',
    ])
    const ebitTotal = [
      '合计',
      (ebitSummary.total.revenue / 10000).toFixed(2),
      (ebitSummary.total.grossProfit / 10000).toFixed(2),
      (ebitSummary.total.grossMargin * 100).toFixed(1) + '%',
      (ebitSummary.total.expense / 10000).toFixed(2),
      (ebitSummary.total.ebit / 10000).toFixed(2),
      (ebitSummary.total.ebitRate * 100).toFixed(1) + '%',
    ]
    XLSX.utils.book_append_sheet(
      wb,
      XLSX.utils.aoa_to_sheet([ebitHeader, ...ebitRows, [], ebitTotal]),
      'EBIT汇总'
    )

    return XLSX.write(wb, { type: 'buffer', bookType: 'xlsx' })
  }

  /**
   * 导出 BU KPI Excel
   */
  async exportBUKPIReport(versionId: string, bu: BusinessUnit): Promise<Buffer> {
    const report = await this.generateBUReport(versionId, bu)
    const wb = XLSX.utils.book_new()

    const summaryData = [
      [`${report.buLabel} — KPI 报表`],
      ['指标', '数值'],
      ['FC 收入(万)',    (report.financial.revenue / 10000).toFixed(2)],
      ['毛利率',         (report.financial.grossMargin * 100).toFixed(1) + '%'],
      ['EBIT(万)',       (report.financial.ebit / 10000).toFixed(2)],
      ['EBIT率',         (report.financial.ebitRate * 100).toFixed(1) + '%'],
      ['平均 FTE',       report.headcount.totalFTE.toFixed(1)],
      ['人均产值(万)',    (report.headcount.perHeadRevenue?.perHeadRevenue || 0).toString()],
      ['Capex 合计(万)', report.capex.totalCapex.toString()],
    ]

    XLSX.utils.book_append_sheet(wb, XLSX.utils.aoa_to_sheet(summaryData), `${report.buLabel}_KPI`)
    return XLSX.write(wb, { type: 'buffer', bookType: 'xlsx' })
  }
}

export const reportService = new ReportGeneratorService()
