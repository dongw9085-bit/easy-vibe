/**
 * Mock API — 静态部署模式下替代真实后端请求
 * 检测环境变量 VITE_MOCK_MODE=true 或非 localhost 时激活
 */
import {
  MOCK_VERSIONS, MOCK_REVENUE, MOCK_EXPENSES, MOCK_HC, MOCK_CAPEX, MOCK_KPI,
  MOCK_APPROVAL_HISTORY, getMockSummary, getMockEBIT, getMockKPIAlerts
} from './mockData'
import { ApprovalStatus } from '../types'

export const IS_MOCK = import.meta.env.VITE_MOCK_MODE === 'true'

const delay = (ms = 200) => new Promise(r => setTimeout(r, ms))

// 内存状态（本次 session 内可操作）
let versions = MOCK_VERSIONS.map(v => ({ ...v }))
let revenueRecords = [...MOCK_REVENUE]
let expenseRecords = [...MOCK_EXPENSES]
let hcPlans = [...MOCK_HC]
let capexPlans = [...MOCK_CAPEX]
const approvalHistory: Record<string, any[]> = { ...MOCK_APPROVAL_HISTORY }

const DEMO_USER = { id: 'u1', name: '李财务', email: 'finance@tcss.com', role: 'FINANCE' as const }

function makeId() { return Math.random().toString(36).slice(2) }

export const mockApi = {
  // Auth
  login: async (email: string, _password: string) => {
    await delay()
    const roleMap: Record<string, any> = {
      'finance@tcss.com': { id: 'u2', name: '李财务', email, role: 'FINANCE' },
      'business@tcss.com': { id: 'u3', name: '王业务', email, role: 'BUSINESS' },
      'ceo@tcss.com': { id: 'u4', name: 'CEO 张总', email, role: 'CEO' },
      'admin@tcss.com': { id: 'u1', name: '系统管理员', email, role: 'ADMIN' }
    }
    const user = roleMap[email] || { id: 'u5', name: email.split('@')[0], email, role: 'BUSINESS' }
    return { token: 'mock-jwt-token', user }
  },

  // Versions
  getVersions: async () => { await delay(); return versions },
  createVersion: async (data: any) => {
    await delay()
    const v = { ...data, id: makeId(), status: 'DRAFT' as ApprovalStatus, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), createdBy: { name: DEMO_USER.name, email: DEMO_USER.email } }
    versions = [v, ...versions]
    return v
  },
  getVersionSummary: async (id: string) => { await delay(); return getMockSummary(id) },
  getKPIAlerts: async (id: string) => { await delay(); return getMockKPIAlerts(id) },

  // Revenue
  getRevenue: async (versionId: string, bu?: string) => {
    await delay()
    return revenueRecords.filter(r => r.versionId === versionId && (!bu || r.bu === bu))
  },
  createRevenue: async (data: any) => {
    await delay()
    const r = { ...data, id: makeId() }
    revenueRecords = [...revenueRecords, r]
    return r
  },
  updateRevenue: async (id: string, data: any) => {
    await delay()
    revenueRecords = revenueRecords.map(r => r.id === id ? { ...r, ...data } : r)
    return revenueRecords.find(r => r.id === id)
  },
  deleteRevenue: async (id: string) => { await delay(); revenueRecords = revenueRecords.filter(r => r.id !== id) },

  // Expenses
  getExpenses: async (versionId: string, bu?: string) => {
    await delay()
    return expenseRecords.filter(r => r.versionId === versionId && (!bu || r.bu === bu))
  },
  createExpense: async (data: any) => {
    await delay()
    const r = { ...data, id: makeId() }
    expenseRecords = [...expenseRecords, r]
    return r
  },
  deleteExpense: async (id: string) => { await delay(); expenseRecords = expenseRecords.filter(r => r.id !== id) },

  // HC
  getHC: async (versionId: string, bu?: string) => {
    await delay()
    return hcPlans.filter(r => r.versionId === versionId && (!bu || r.bu === bu))
  },
  createHC: async (data: any) => {
    await delay()
    const r = { ...data, id: makeId() }
    hcPlans = [...hcPlans, r]
    return r
  },

  // Capex
  getCapex: async (versionId: string, bu?: string) => {
    await delay()
    return capexPlans.filter(r => r.versionId === versionId && (!bu || r.bu === bu))
  },
  createCapex: async (data: any) => {
    await delay()
    const r = { ...data, id: makeId() }
    capexPlans = [...capexPlans, r]
    return r
  },

  // Production — mock with empty
  getProduction: async () => { await delay(); return [] },
  createProduction: async (data: any) => { await delay(); return { ...data, id: makeId() } },
  getProductionSiteSummary: async () => { await delay(); return [] },

  // KPI
  getKPI: async () => { await delay(); return MOCK_KPI },
  createKPI: async (data: any) => { await delay(); return { ...data, id: makeId() } },

  // Approvals
  doApprovalAction: async (versionId: string, action: string, comment: string, userRole: string) => {
    await delay()
    const transitions: Record<string, ApprovalStatus> = {
      SUBMIT: 'SUBMITTED',
      FINANCE_REVIEW: 'FINANCE_REVIEWED',
      CEO_APPROVE: 'CEO_APPROVED',
      LOCK: 'LOCKED',
      REJECT: 'DRAFT'
    }
    const newStatus = transitions[action]
    versions = versions.map(v => v.id === versionId ? { ...v, status: newStatus, updatedAt: new Date().toISOString(), ...(newStatus === 'LOCKED' ? { lockedAt: new Date().toISOString() } : {}) } : v)
    const roleNames: Record<string, string> = { BUSINESS: '王业务', FINANCE: '李财务', CEO: 'CEO 张总', ADMIN: '系统管理员' }
    if (!approvalHistory[versionId]) approvalHistory[versionId] = []
    approvalHistory[versionId].push({ approver: { name: roleNames[userRole] || userRole, role: userRole }, action, comment, createdAt: new Date().toISOString() })
    return versions.find(v => v.id === versionId)
  },
  getApprovalHistory: async (versionId: string) => { await delay(); return approvalHistory[versionId] || [] },

  // Reports
  getEBIT: async (versionId: string) => { await delay(); return getMockEBIT(versionId) },
  downloadExcel: () => alert('📊 演示模式：Excel 导出功能需连接真实后端\n\n数据已在页面中展示，可截图或复制使用。')
}
