/**
 * M2 预测模型引擎 — 市场预测 + HC/C&B + 成本降本
 */
import { PrismaClient, BusinessUnit } from '@prisma/client'

const prisma = new PrismaClient()

// ── 子模型1：市场预测引擎 ─────────────────────────────
export class MarketForecastEngine {
  /**
   * 计算销售基础线（基于 YTD6 历史数据）
   * 逻辑：YTD 月均 × 季节因子 × 趋势系数
   */
  async calculateBaseline(versionId: string, buType: BusinessUnit) {
    const ytdRecords = await prisma.revenueRecord.findMany({
      where: { versionId, bu: buType, dataType: 'YTD' },
      orderBy: { month: 'asc' }
    })

    if (ytdRecords.length === 0) return null

    const avgMonthly = ytdRecords.reduce((s, r) => s + r.amount, 0) / ytdRecords.length
    // 线性趋势系数（最后3个月 vs 前3个月）
    const early = ytdRecords.slice(0, 3).reduce((s, r) => s + r.amount, 0) / 3
    const late  = ytdRecords.slice(-3).reduce((s, r) => s + r.amount, 0) / 3
    const trendFactor = late / early

    // 季节因子（行业均值，可从 KPI 库读取）
    const seasonFactors: Record<number, number> = {
      7: 0.98, 8: 0.95, 9: 1.02, 10: 1.08, 11: 1.12, 12: 1.18
    }

    return { avgMonthly, trendFactor, seasonFactors, buType }
  }

  /**
   * 计算增长计划（基于手工录入的增长性假设）
   * 来源：SFE、仪器投放、电商投流等
   */
  async calculateGrowthPlan(versionId: string, buType: BusinessUnit) {
    const fcRecords = await prisma.revenueRecord.findMany({
      where: { versionId, bu: buType, dataType: 'FC' }
    })

    const growthByMonth: Record<number, number> = {}
    for (const r of fcRecords) {
      growthByMonth[r.month] = (growthByMonth[r.month] || 0) + r.growthVolume * r.price
    }

    return { growthByMonth, totalGrowth: Object.values(growthByMonth).reduce((s, v) => s + v, 0) }
  }

  /**
   * 合并输出：基础线 + 增长计划 → 最终收入预测
   */
  async mergeAndOutput(versionId: string, buType: BusinessUnit) {
    const [baseline, growth] = await Promise.all([
      this.calculateBaseline(versionId, buType),
      this.calculateGrowthPlan(versionId, buType)
    ])

    if (!baseline) return null

    const months = [7, 8, 9, 10, 11, 12]
    const forecast = months.map(month => {
      const base = Math.round(
        baseline.avgMonthly * baseline.trendFactor * (baseline.seasonFactors[month] || 1)
      )
      const growth_m = Math.round(growth.growthByMonth[month] || 0)
      const total = base + growth_m

      return { month, base, growth: growth_m, total, bu: buType }
    })

    const totalRevenue = forecast.reduce((s, f) => s + f.total, 0)

    return { bu: buType, forecast, totalRevenue }
  }

  /**
   * 计算 BU EBIT：收入 × 毛利率 - 部门费用 - 分摊管理费用
   */
  async calculateBUEBIT(versionId: string, buType: BusinessUnit) {
    const [revenues, expenses] = await Promise.all([
      prisma.revenueRecord.findMany({ where: { versionId, bu: buType, dataType: 'FC' } }),
      prisma.expenseRecord.findMany({ where: { versionId, bu: buType } })
    ])

    const totalRevenue = revenues.reduce((s, r) => s + r.amount, 0)
    const avgGrossMargin = revenues.length
      ? revenues.reduce((s, r) => s + r.grossMargin * r.amount, 0) / totalRevenue
      : 0.6
    const grossProfit = Math.round(totalRevenue * avgGrossMargin)
    const totalExpense = expenses.reduce((s, e) => s + e.amount, 0)
    const ebit = grossProfit - totalExpense
    const ebitRate = totalRevenue > 0 ? ebit / totalRevenue : 0

    return {
      bu: buType,
      revenue: totalRevenue,
      grossProfit,
      grossMargin: avgGrossMargin,
      expense: totalExpense,
      ebit,
      ebitRate
    }
  }
}

// ── 子模型3：降本与自动化引擎 ────────────────────────────
export class CostReductionEngine {
  /**
   * 计算材料降本节约
   * 节约 = 原材料成本 × 降本率（%）
   */
  calculateMaterialSaving(
    baseMaterialCost: number,
    reductionRate: number,
    startMonth: number
  ): Record<number, number> {
    const saving: Record<number, number> = {}
    for (let m = 7; m <= 12; m++) {
      saving[m] = m >= startMonth ? Math.round(baseMaterialCost * reductionRate) : 0
    }
    return saving
  }

  /**
   * 计算人工效率提升节约
   * 节约 = FTE减少数 × 月均C&B + 工时节约金额
   */
  calculateLaborSaving(
    fteReduction: number,
    avgMonthlyCB: number,
    hoursaving: number,
    hourlyRate: number,
    startMonth: number
  ): Record<number, number> {
    const saving: Record<number, number> = {}
    for (let m = 7; m <= 12; m++) {
      saving[m] = m >= startMonth
        ? Math.round(fteReduction * avgMonthlyCB + hoursaving * hourlyRate)
        : 0
    }
    return saving
  }

  /**
   * 计算 Capex 折旧（增加成本项）
   * 月折旧 = 投资总额 ÷ 折旧月数
   */
  calculateCapexDepreciation(totalCapex: number, depMonths: number, startMonth: number): Record<number, number> {
    const monthlyDep = Math.round(totalCapex / depMonths)
    const dep: Record<number, number> = {}
    for (let m = 7; m <= 12; m++) {
      dep[m] = m >= startMonth ? monthlyDep : 0
    }
    return dep
  }

  /**
   * 计算净节约 = 人工节约 + 材料节约 - 新增折旧
   */
  async calculateNetSaving(versionId: string) {
    const capexPlans = await prisma.capexPlan.findMany({ where: { versionId } })

    const netByMonth: Record<number, number> = {}
    for (let m = 7; m <= 12; m++) {
      const totalDep = capexPlans
        .filter(c => c.month <= m)
        .reduce((s, c) => s + c.monthlyDepreciation, 0)

      // 简化：效率节约 = Capex × efficiencyGain / 折旧月数
      const effSaving = capexPlans
        .filter(c => c.month <= m)
        .reduce((s, c) => s + (c.amount * (c.efficiencyGain || 0) / 100 / c.depreciationMonths), 0)

      netByMonth[m] = Math.round(effSaving - totalDep)
    }

    return {
      netByMonth,
      totalNet: Object.values(netByMonth).reduce((s, v) => s + v, 0)
    }
  }
}

// ── 子模型5：HC/C&B 预测引擎 ─────────────────────────────
export class HCForecastEngine {
  /**
   * 计算月度薪酬福利
   */
  async calculateMonthlyCB(versionId: string, buType: BusinessUnit, month: number) {
    const hcPlans = await prisma.hCPlan.findMany({
      where: { versionId, bu: buType, month }
    })

    if (hcPlans.length === 0) return null

    const totalFTE = hcPlans.reduce((s, h) => s + h.fte, 0)
    const baseSalary = hcPlans.reduce((s, h) => s + h.baseSalary * h.fte, 0)
    const bonus = hcPlans.reduce((s, h) => s + h.bonus, 0)
    const insurance = hcPlans.reduce((s, h) => s + h.insurance, 0)
    const totalCB = hcPlans.reduce((s, h) => s + h.totalCB, 0)

    return { bu: buType, month, totalFTE, baseSalary, bonus, insurance, totalCB }
  }

  /**
   * 人均产值：BU总收入 ÷ FTE（与行业对比）
   * 行业基准：大型诊断企业约 150-200 万/人/年
   */
  async calculatePerHeadRevenue(versionId: string, buType: BusinessUnit) {
    const [revenues, hcPlans] = await Promise.all([
      prisma.revenueRecord.findMany({ where: { versionId, bu: buType, dataType: 'FC' } }),
      prisma.hCPlan.findMany({ where: { versionId, bu: buType } })
    ])

    const totalRevenue = revenues.reduce((s, r) => s + r.amount, 0)
    const avgFTE = hcPlans.length
      ? hcPlans.reduce((s, h) => s + h.fte, 0) / hcPlans.length
      : 0

    const perHeadRevenue = avgFTE > 0 ? totalRevenue / avgFTE : 0
    const INDUSTRY_BENCHMARK = 150 // 万元/人，行业均值

    return {
      bu: buType,
      totalRevenue,
      avgFTE,
      perHeadRevenue: Math.round(perHeadRevenue),
      industryBenchmark: INDUSTRY_BENCHMARK,
      vsIndustry: perHeadRevenue > 0
        ? ((perHeadRevenue - INDUSTRY_BENCHMARK) / INDUSTRY_BENCHMARK * 100).toFixed(1) + '%'
        : 'N/A'
    }
  }
}

export const marketEngine = new MarketForecastEngine()
export const costReductionEngine = new CostReductionEngine()
export const hcEngine = new HCForecastEngine()
