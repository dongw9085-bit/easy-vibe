/**
 * M3 KPI 设置与预警服务
 */
import { PrismaClient, BusinessUnit } from '@prisma/client'

const prisma = new PrismaClient()

export type AlertLevel = 'RED' | 'YELLOW' | 'GREEN'

export interface KPIAlert {
  kpiCode: string
  kpiName: string
  bu: BusinessUnit
  actual: number
  target: number
  deviation: number   // 偏差率 %
  level: AlertLevel
  message: string
}

const ALERT_THRESHOLDS = {
  RED:    0.15,   // 偏差 > 15% → 红色预警
  YELLOW: 0.05,   // 偏差 5-15% → 黄色预警
}

export class KPIService {
  /**
   * 检查单条记录是否触发 KPI 阈值
   */
  async checkThreshold(
    versionId: string,
    bu: BusinessUnit,
    kpiCode: string,
    actualValue: number
  ): Promise<KPIAlert | null> {
    const benchmark = await prisma.kPIBenchmark.findFirst({
      where: { bu, kpiCode }
    })

    if (!benchmark) return null

    const deviation = Math.abs(actualValue - benchmark.targetValue) / benchmark.targetValue
    const level: AlertLevel =
      deviation >= ALERT_THRESHOLDS.RED    ? 'RED' :
      deviation >= ALERT_THRESHOLDS.YELLOW ? 'YELLOW' : 'GREEN'

    if (level === 'GREEN') return null

    return {
      kpiCode,
      kpiName: benchmark.kpiName,
      bu,
      actual: actualValue,
      target: benchmark.targetValue,
      deviation: parseFloat((deviation * 100).toFixed(2)),
      level,
      message: this.buildMessage(benchmark.kpiName, actualValue, benchmark.targetValue, deviation, level)
    }
  }

  /**
   * 版本提交时批量检测所有 BU 的 KPI
   */
  async batchCheckVersion(versionId: string): Promise<KPIAlert[]> {
    const alerts: KPIAlert[] = []
    const version = await prisma.forecastVersion.findUnique({ where: { id: versionId } })
    if (!version) return alerts

    const businessUnits = await prisma.revenueRecord
      .findMany({ where: { versionId }, select: { bu: true }, distinct: ['bu'] })
      .then(r => r.map(x => x.bu))

    for (const bu of businessUnits) {
      // 检查毛利率
      const revenues = await prisma.revenueRecord.findMany({
        where: { versionId, bu, dataType: 'FC' }
      })
      if (revenues.length > 0) {
        const totalRev = revenues.reduce((s, r) => s + r.amount, 0)
        const avgGM = revenues.reduce((s, r) => s + r.grossMargin * r.amount, 0) / totalRev
        const gmAlert = await this.checkThreshold(versionId, bu, 'GROSS_MARGIN', avgGM)
        if (gmAlert) alerts.push(gmAlert)

        // 检查 DSO
        const avgDSO = revenues.filter(r => r.dso).reduce((s, r) => s + (r.dso || 0), 0) /
          revenues.filter(r => r.dso).length
        if (avgDSO > 0) {
          const dsoAlert = await this.checkThreshold(versionId, bu, 'DSO', avgDSO)
          if (dsoAlert) alerts.push(dsoAlert)
        }
      }

      // 检查费用率
      const expenses = await prisma.expenseRecord.findMany({ where: { versionId, bu } })
      if (expenses.length > 0 && revenues.length > 0) {
        const totalExp = expenses.reduce((s, e) => s + e.amount, 0)
        const totalRev = revenues.reduce((s, r) => s + r.amount, 0)
        const expRate = totalExp / totalRev
        const expAlert = await this.checkThreshold(versionId, bu, 'EXPENSE_RATE', expRate)
        if (expAlert) alerts.push(expAlert)
      }

      // 检查 EBIT 率
      const revenues2 = await prisma.revenueRecord.findMany({ where: { versionId, bu, dataType: 'FC' } })
      const expenses2 = await prisma.expenseRecord.findMany({ where: { versionId, bu } })
      if (revenues2.length > 0) {
        const rev = revenues2.reduce((s, r) => s + r.amount, 0)
        const gm = revenues2.reduce((s, r) => s + r.grossMargin * r.amount, 0)
        const exp = expenses2.reduce((s, e) => s + e.amount, 0)
        const ebitRate = (gm - exp) / rev
        const ebitAlert = await this.checkThreshold(versionId, bu, 'EBIT_RATE', ebitRate)
        if (ebitAlert) alerts.push(ebitAlert)
      }
    }

    // 检查环比变化 > 30%（异常数据标记）
    const anomalies = await this.detectAnomalies(versionId)
    alerts.push(...anomalies)

    return alerts
  }

  /**
   * 检测环比变化 > 30% 的异常数据
   */
  async detectAnomalies(versionId: string): Promise<KPIAlert[]> {
    const alerts: KPIAlert[] = []
    const revenues = await prisma.revenueRecord.findMany({
      where: { versionId },
      orderBy: [{ bu: 'asc' }, { month: 'asc' }]
    })

    const buMonthMap: Record<string, typeof revenues> = {}
    for (const r of revenues) {
      const key = `${r.bu}_${r.productLine}`
      if (!buMonthMap[key]) buMonthMap[key] = []
      buMonthMap[key].push(r)
    }

    for (const [key, records] of Object.entries(buMonthMap)) {
      for (let i = 1; i < records.length; i++) {
        const prev = records[i - 1].amount
        const curr = records[i].amount
        if (prev > 0) {
          const change = Math.abs(curr - prev) / prev
          if (change > 0.3) {
            alerts.push({
              kpiCode: 'MOM_CHANGE',
              kpiName: `月环比异常 (${records[i].bu} · ${records[i].productLine})`,
              bu: records[i].bu,
              actual: curr,
              target: prev,
              deviation: parseFloat((change * 100).toFixed(1)),
              level: 'YELLOW',
              message: `${records[i].month}月 vs ${records[i - 1].month}月 环比变化 ${(change * 100).toFixed(1)}%，请确认是否合理`
            })
          }
        }
      }
    }

    return alerts
  }

  /**
   * 生成版本完整预警报告
   */
  async generateAlertReport(versionId: string) {
    const alerts = await this.batchCheckVersion(versionId)
    const red    = alerts.filter(a => a.level === 'RED')
    const yellow = alerts.filter(a => a.level === 'YELLOW')

    return {
      versionId,
      generatedAt: new Date().toISOString(),
      summary: { total: alerts.length, red: red.length, yellow: yellow.length },
      alerts,
      aiSuggestions: alerts.map(a => this.generateSuggestion(a))
    }
  }

  private buildMessage(name: string, actual: number, target: number, deviation: number, level: AlertLevel): string {
    const dir = actual < target ? '低于' : '高于'
    const pct = (deviation * 100).toFixed(1)
    const prefix = level === 'RED' ? '🔴 严重预警' : '🟡 注意'
    return `${prefix}：${name} ${dir}目标 ${pct}%（实际 ${actual.toFixed(2)}，目标 ${target.toFixed(2)}）`
  }

  private generateSuggestion(alert: KPIAlert): string {
    const suggestions: Record<string, string> = {
      GROSS_MARGIN:  '建议复核产品结构和定价策略，或检查成本端是否有异常上涨',
      DSO:           '建议加强应收账款催收，评估客户信用等级，考虑缩短账期',
      EXPENSE_RATE:  '建议分析费用超支原因，重点排查差旅、市场推广支出',
      EBIT_RATE:     '建议从提高毛利率和控制费用两端同步发力',
      MOM_CHANGE:    '环比波动较大，建议确认是否有一次性大单、季节因素或数据录入错误',
    }
    return suggestions[alert.kpiCode] || '建议与业务负责人确认数据合理性'
  }
}

export const kpiService = new KPIService()
