export type Role = 'BUSINESS' | 'FINANCE' | 'CEO' | 'ADMIN'

export type ApprovalStatus =
  | 'DRAFT'
  | 'SUBMITTED'
  | 'FINANCE_REVIEWED'
  | 'CEO_APPROVED'
  | 'LOCKED'
  | 'REJECTED'

export type BusinessUnit =
  | 'DOMESTIC_MEDICAL'
  | 'ECOMMERCE'
  | 'INTERNATIONAL_MEDICAL'
  | 'PET'
  | 'PRODUCTION_OPS'
  | 'RD_TECH'
  | 'ADMIN_SUPPORT'

export interface User {
  id: string
  name: string
  email: string
  role: Role
}

export interface ForecastVersion {
  id: string
  name: string
  period: string
  status: ApprovalStatus
  createdAt: string
  updatedAt: string
  lockedAt?: string
  createdBy: { name: string; email: string }
}

export interface RevenueRecord {
  id: string
  versionId: string
  bu: BusinessUnit
  productLine: string
  sku?: string
  month: number
  year: number
  isActual: boolean
  baselineVolume?: number
  incrementVolume?: number
  unitPrice?: number
  baselineRevenue?: number
  growthRevenue?: number
  grossMarginPct?: number
  dso?: number
  notes?: string
}

export interface ExpenseRecord {
  id: string
  versionId: string
  bu: BusinessUnit
  category: string
  subcategory?: string
  month: number
  year: number
  isActual: boolean
  amount: number
  notes?: string
}

export interface HCPlan {
  id: string
  versionId: string
  bu: BusinessUnit
  department: string
  month: number
  year: number
  isActual: boolean
  headcount: number
  fte: number
  baseSalary?: number
  bonus?: number
  socialInsur?: number
  totalCB?: number
  notes?: string
}

export interface CapexPlan {
  id: string
  versionId: string
  bu: BusinessUnit
  projectName: string
  category: string
  month: number
  year: number
  amount: number
  depreciationLife: number
  monthlyDepr?: number
  efficiencyGain?: number
  roi?: number
  notes?: string
}

export interface KPIAlert {
  bu: BusinessUnit
  kpi: string
  value: number
  threshold: number
  type: 'LOW' | 'HIGH'
}

export interface EBITResult {
  bu: BusinessUnit
  isActual: boolean
  revenue: number
  grossProfit: number
  grossMarginPct: number
  expenses: number
  ebit: number
  ebitPct: string
}

export const BU_LABELS: Record<BusinessUnit, string> = {
  DOMESTIC_MEDICAL: '国内人医',
  ECOMMERCE: '电商',
  INTERNATIONAL_MEDICAL: '国际人医',
  PET: '宠物',
  PRODUCTION_OPS: '生产运营',
  RD_TECH: '研发技术',
  ADMIN_SUPPORT: '管理支持'
}

export const STATUS_LABELS: Record<ApprovalStatus, string> = {
  DRAFT: '草稿',
  SUBMITTED: '已提交',
  FINANCE_REVIEWED: '财务已复核',
  CEO_APPROVED: 'CEO已审批',
  LOCKED: '已锁定',
  REJECTED: '已驳回'
}

export const ROLE_LABELS: Record<Role, string> = {
  BUSINESS: '业务部门',
  FINANCE: '财务',
  CEO: 'CEO',
  ADMIN: '系统管理员'
}
