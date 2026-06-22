import { ForecastVersion, RevenueRecord, ExpenseRecord, HCPlan, CapexPlan, EBITResult, BusinessUnit } from '../types'

const BUs: BusinessUnit[] = ['DOMESTIC_MEDICAL', 'ECOMMERCE', 'INTERNATIONAL_MEDICAL', 'PET']

const rnd = (min: number, max: number) => min + Math.random() * (max - min)

// ---- 版本 ----
export const MOCK_VERSIONS: ForecastVersion[] = [
  {
    id: 'demo-version-2026h2',
    name: '2026年下半年FC6+6',
    period: '2026H2',
    status: 'FINANCE_REVIEWED',
    createdAt: '2026-06-16T08:00:00Z',
    updatedAt: '2026-06-20T14:30:00Z',
    createdBy: { name: '李财务', email: 'finance@tcss.com' }
  },
  {
    id: 'demo-version-2026h1',
    name: '2026年上半年FC6+6（历史）',
    period: '2026H1',
    status: 'LOCKED',
    lockedAt: '2026-01-15T09:00:00Z',
    createdAt: '2025-12-20T08:00:00Z',
    updatedAt: '2026-01-15T09:00:00Z',
    createdBy: { name: '李财务', email: 'finance@tcss.com' }
  }
]

// ---- 收入记录 ----
const BASE_REV: Record<BusinessUnit, number> = {
  DOMESTIC_MEDICAL: 5200000,
  ECOMMERCE: 3100000,
  INTERNATIONAL_MEDICAL: 2300000,
  PET: 1600000,
  PRODUCTION_OPS: 0,
  RD_TECH: 0,
  ADMIN_SUPPORT: 0
}
const GM: Record<BusinessUnit, number> = {
  DOMESTIC_MEDICAL: 62, ECOMMERCE: 55, INTERNATIONAL_MEDICAL: 58, PET: 48,
  PRODUCTION_OPS: 0, RD_TECH: 0, ADMIN_SUPPORT: 0
}
const DSO: Record<BusinessUnit, number> = {
  DOMESTIC_MEDICAL: 45, ECOMMERCE: 15, INTERNATIONAL_MEDICAL: 60, PET: 30,
  PRODUCTION_OPS: 0, RD_TECH: 0, ADMIN_SUPPORT: 0
}
const PRODUCT_LINES: Record<BusinessUnit, string> = {
  DOMESTIC_MEDICAL: '血液检测产品线',
  ECOMMERCE: '电商直销产品线',
  INTERNATIONAL_MEDICAL: '出口诊断试剂',
  PET: '宠物检测产品线',
  PRODUCTION_OPS: '-', RD_TECH: '-', ADMIN_SUPPORT: '-'
}

export const MOCK_REVENUE: RevenueRecord[] = BUs.flatMap(bu =>
  Array.from({ length: 12 }, (_, i) => {
    const month = i + 1
    const isActual = month <= 6
    const v = rnd(0.82, 1.18)
    const base = BASE_REV[bu]
    return {
      id: `rev-${bu}-${month}`,
      versionId: 'demo-version-2026h2',
      bu,
      productLine: PRODUCT_LINES[bu],
      month,
      year: 2026,
      isActual,
      baselineVolume: Math.round(base / 500 * v),
      incrementVolume: isActual ? 0 : Math.round(base / 500 * 0.12 * v),
      unitPrice: 500,
      baselineRevenue: Math.round(base * v),
      growthRevenue: isActual ? 0 : Math.round(base * 0.12 * v),
      grossMarginPct: GM[bu],
      dso: DSO[bu]
    }
  })
)

// ---- 费用记录 ----
const EXP_CATS = ['维持性费用', 'HC C&B', '市场推广', '电商费用', '差旅费']
export const MOCK_EXPENSES: ExpenseRecord[] = BUs.flatMap(bu =>
  Array.from({ length: 12 }, (_, i) => ({
    id: `exp-${bu}-${i + 1}`,
    versionId: 'demo-version-2026h2',
    bu,
    category: EXP_CATS[Math.floor(Math.random() * EXP_CATS.length)],
    month: i + 1,
    year: 2026,
    isActual: i < 6,
    amount: Math.round(rnd(400000, 800000))
  }))
)

// ---- HC 计划 ----
const HC_COUNT: Record<BusinessUnit, number> = {
  DOMESTIC_MEDICAL: 45, ECOMMERCE: 25, INTERNATIONAL_MEDICAL: 30, PET: 20,
  PRODUCTION_OPS: 80, RD_TECH: 35, ADMIN_SUPPORT: 28
}
export const MOCK_HC: HCPlan[] = BUs.flatMap(bu =>
  Array.from({ length: 12 }, (_, i) => {
    const hc = HC_COUNT[bu]
    return {
      id: `hc-${bu}-${i + 1}`,
      versionId: 'demo-version-2026h2',
      bu,
      department: '营销部',
      month: i + 1,
      year: 2026,
      isActual: i < 6,
      headcount: hc,
      fte: hc * 0.95,
      baseSalary: hc * 15000,
      bonus: hc * 3000,
      socialInsur: hc * 4500,
      totalCB: hc * 22500
    }
  })
)

// ---- Capex ----
export const MOCK_CAPEX: CapexPlan[] = [
  { id: 'cap-1', versionId: 'demo-version-2026h2', bu: 'DOMESTIC_MEDICAL', projectName: '仪器投放计划 Q3', category: '仪器投放', month: 7, year: 2026, amount: 2000000, depreciationLife: 60, monthlyDepr: 33333, efficiencyGain: 15, roi: 25 },
  { id: 'cap-2', versionId: 'demo-version-2026h2', bu: 'PRODUCTION_OPS', projectName: '厦门自动化生产线', category: '自动化项目', month: 8, year: 2026, amount: 5000000, depreciationLife: 84, monthlyDepr: 59524, efficiencyGain: 30, roi: 35 },
  { id: 'cap-3', versionId: 'demo-version-2026h2', bu: 'ECOMMERCE', projectName: '仓储系统升级', category: 'IT系统', month: 9, year: 2026, amount: 800000, depreciationLife: 36, monthlyDepr: 22222, roi: 20 },
  { id: 'cap-4', versionId: 'demo-version-2026h2', bu: 'PET', projectName: '宠物仪器投放 Q4', category: '仪器投放', month: 10, year: 2026, amount: 1200000, depreciationLife: 60, monthlyDepr: 20000, roi: 18 }
]

// ---- KPI 基准 ----
export const MOCK_KPI = [
  { id: 'kpi-1', bu: 'DOMESTIC_MEDICAL', kpiName: '毛利率', kpiCode: 'GM_PCT', unit: '%', historical: 60, budget: 63, tenYearPlan: 70, warnLow: 55, warnHigh: 80, year: 2026 },
  { id: 'kpi-2', bu: 'ECOMMERCE', kpiName: '毛利率', kpiCode: 'GM_PCT', unit: '%', historical: 50, budget: 55, tenYearPlan: 65, warnLow: 45, warnHigh: 75, year: 2026 },
  { id: 'kpi-3', bu: 'DOMESTIC_MEDICAL', kpiName: 'DSO', kpiCode: 'DSO_DAYS', unit: '天', historical: 50, budget: 45, tenYearPlan: 35, warnLow: 20, warnHigh: 60, year: 2026 },
  { id: 'kpi-4', bu: 'INTERNATIONAL_MEDICAL', kpiName: '毛利率', kpiCode: 'GM_PCT', unit: '%', historical: 55, budget: 58, tenYearPlan: 65, warnLow: 48, warnHigh: 72, year: 2026 },
  { id: 'kpi-5', bu: 'PET', kpiName: 'OEE', kpiCode: 'OEE_PCT', unit: '%', historical: 75, budget: 80, tenYearPlan: 90, warnLow: 65, warnHigh: 95, year: 2026 }
]

// ---- 审批历史 ----
export const MOCK_APPROVAL_HISTORY: Record<string, any[]> = {
  'demo-version-2026h2': [
    { approver: { name: '王业务', role: 'BUSINESS' }, action: 'SUBMIT', comment: '数据已核对，请财务复核', createdAt: '2026-06-17T10:00:00Z' },
    { approver: { name: '李财务', role: 'FINANCE' }, action: 'FINANCE_REVIEW', comment: '各BU数据合理，毛利率符合预期，提请CEO审批', createdAt: '2026-06-19T15:30:00Z' }
  ],
  'demo-version-2026h1': [
    { approver: { name: '王业务', role: 'BUSINESS' }, action: 'SUBMIT', comment: '', createdAt: '2026-01-10T09:00:00Z' },
    { approver: { name: '李财务', role: 'FINANCE' }, action: 'FINANCE_REVIEW', comment: '通过', createdAt: '2026-01-12T11:00:00Z' },
    { approver: { name: 'CEO 张总', role: 'CEO' }, action: 'CEO_APPROVE', comment: '同意，执行', createdAt: '2026-01-14T16:00:00Z' },
    { approver: { name: '系统管理员', role: 'ADMIN' }, action: 'LOCK', comment: '', createdAt: '2026-01-15T09:00:00Z' }
  ]
}

// ---- 汇总计算 ----
export function getMockSummary(versionId: string) {
  const rev = MOCK_REVENUE.filter(r => r.versionId === versionId && !r.isActual)
  const exp = MOCK_EXPENSES.filter(e => e.versionId === versionId && !e.isActual)
  const hc = MOCK_HC.filter(h => h.versionId === versionId)
  const cap = MOCK_CAPEX.filter(c => c.versionId === versionId)
  return {
    totalRevenue: rev.reduce((s, r) => s + (r.baselineRevenue || 0) + (r.growthRevenue || 0), 0),
    totalExpenses: exp.reduce((s, e) => s + e.amount, 0),
    totalFTE: hc.reduce((s, h) => s + Number(h.fte), 0) / 12,
    totalCB: hc.reduce((s, h) => s + (h.totalCB || 0), 0) / 12,
    totalCapex: cap.reduce((s, c) => s + c.amount, 0)
  }
}

export function getMockEBIT(versionId: string): EBITResult[] {
  return BUs.map(bu => {
    const rev = MOCK_REVENUE.filter(r => r.versionId === versionId && r.bu === bu && !r.isActual)
    const exp = MOCK_EXPENSES.filter(e => e.versionId === versionId && e.bu === bu && !e.isActual)
    const revenue = rev.reduce((s, r) => s + (r.baselineRevenue || 0) + (r.growthRevenue || 0), 0)
    const gm = GM[bu]
    const grossProfit = revenue * gm / 100
    const expenses = exp.reduce((s, e) => s + e.amount, 0)
    const ebit = grossProfit - expenses
    return { bu, isActual: false, revenue, grossProfit, grossMarginPct: gm, expenses, ebit, ebitPct: revenue ? (ebit / revenue * 100).toFixed(2) : '0' }
  }).filter(e => e.revenue > 0)
}

export function getMockKPIAlerts(versionId: string) {
  const alerts: any[] = []
  const ebit = getMockEBIT(versionId)
  for (const kpi of MOCK_KPI) {
    const buData = ebit.find(e => e.bu === kpi.bu)
    if (!buData) continue
    if (kpi.kpiCode === 'GM_PCT') {
      if (kpi.warnLow && buData.grossMarginPct < kpi.warnLow)
        alerts.push({ bu: kpi.bu, kpi: kpi.kpiName, value: buData.grossMarginPct, threshold: kpi.warnLow, type: 'LOW' })
      if (kpi.warnHigh && buData.grossMarginPct > kpi.warnHigh)
        alerts.push({ bu: kpi.bu, kpi: kpi.kpiName, value: buData.grossMarginPct, threshold: kpi.warnHigh, type: 'HIGH' })
    }
  }
  return alerts
}
