/**
 * 统一数据服务层 — 根据 IS_MOCK 自动切换 Mock / 真实 API
 */
import api from './api'
import { IS_MOCK, mockApi } from './mockApi'

export const svc = {
  // Versions
  getVersions: () => IS_MOCK ? mockApi.getVersions() : api.get('/versions').then(r => r.data),
  createVersion: (data: any) => IS_MOCK ? mockApi.createVersion(data) : api.post('/versions', data).then(r => r.data),
  getVersionSummary: (id: string) => IS_MOCK ? mockApi.getVersionSummary(id) : api.get(`/versions/${id}/summary`).then(r => r.data),
  getKPIAlerts: (id: string) => IS_MOCK ? mockApi.getKPIAlerts(id) : api.get(`/versions/${id}/kpi-alerts`).then(r => r.data),

  // Revenue
  getRevenue: (versionId: string, bu?: string) => IS_MOCK
    ? mockApi.getRevenue(versionId, bu)
    : api.get(`/revenue?versionId=${versionId}${bu ? `&bu=${bu}` : ''}`).then(r => r.data),
  createRevenue: (data: any) => IS_MOCK ? mockApi.createRevenue(data) : api.post('/revenue', data).then(r => r.data),
  updateRevenue: (id: string, data: any) => IS_MOCK ? mockApi.updateRevenue(id, data) : api.put(`/revenue/${id}`, data).then(r => r.data),
  deleteRevenue: (id: string) => IS_MOCK ? mockApi.deleteRevenue(id) : api.delete(`/revenue/${id}`),

  // Expenses
  getExpenses: (versionId: string, bu?: string) => IS_MOCK
    ? mockApi.getExpenses(versionId, bu)
    : api.get(`/expenses?versionId=${versionId}${bu ? `&bu=${bu}` : ''}`).then(r => r.data),
  createExpense: (data: any) => IS_MOCK ? mockApi.createExpense(data) : api.post('/expenses', data).then(r => r.data),
  deleteExpense: (id: string) => IS_MOCK ? mockApi.deleteExpense(id) : api.delete(`/expenses/${id}`),

  // HC
  getHC: (versionId: string, bu?: string) => IS_MOCK
    ? mockApi.getHC(versionId, bu)
    : api.get(`/hc?versionId=${versionId}${bu ? `&bu=${bu}` : ''}`).then(r => r.data),
  createHC: (data: any) => IS_MOCK ? mockApi.createHC(data) : api.post('/hc', data).then(r => r.data),

  // Capex
  getCapex: (versionId: string, bu?: string) => IS_MOCK
    ? mockApi.getCapex(versionId, bu)
    : api.get(`/capex?versionId=${versionId}${bu ? `&bu=${bu}` : ''}`).then(r => r.data),
  createCapex: (data: any) => IS_MOCK ? mockApi.createCapex(data) : api.post('/capex', data).then(r => r.data),

  // Production
  getProduction: (versionId: string, site?: string) => IS_MOCK
    ? mockApi.getProduction()
    : api.get(`/production?versionId=${versionId}${site ? `&site=${site}` : ''}`).then(r => r.data),
  createProduction: (data: any) => IS_MOCK ? mockApi.createProduction(data) : api.post('/production', data).then(r => r.data),
  getProductionSiteSummary: (versionId: string) => IS_MOCK
    ? mockApi.getProductionSiteSummary()
    : api.get(`/production/site-summary?versionId=${versionId}`).then(r => r.data),

  // KPI
  getKPI: (bu?: string, year?: number) => IS_MOCK
    ? mockApi.getKPI()
    : api.get(`/kpi${bu ? `?bu=${bu}` : ''}${year ? `${bu ? '&' : '?'}year=${year}` : ''}`).then(r => r.data),
  createKPI: (data: any) => IS_MOCK ? mockApi.createKPI(data) : api.post('/kpi', data).then(r => r.data),

  // Approvals
  doApprovalAction: (versionId: string, action: string, comment: string, userRole: string) => IS_MOCK
    ? mockApi.doApprovalAction(versionId, action, comment, userRole)
    : api.post(`/approvals/${versionId}/action`, { action, comment }).then(r => r.data),
  getApprovalHistory: (versionId: string) => IS_MOCK
    ? mockApi.getApprovalHistory(versionId)
    : api.get(`/approvals/${versionId}/history`).then(r => r.data),

  // Reports
  getEBIT: (versionId: string) => IS_MOCK ? mockApi.getEBIT(versionId) : api.get(`/reports/${versionId}/ebit`).then(r => r.data),
  downloadExcel: (versionId: string) => IS_MOCK
    ? mockApi.downloadExcel()
    : window.open(`/api/reports/${versionId}/excel`, '_blank'),

  // Import template download (mock mode skips)
  downloadTemplate: () => IS_MOCK ? alert('演示模式：请在本地运行版本使用 Excel 模板下载') : window.open('/api/import/template/revenue', '_blank'),
  uploadRevenue: (versionId: string, file: File) => {
    if (IS_MOCK) { alert('演示模式：请在本地运行版本使用 Excel 导入'); return Promise.resolve({ imported: 0 }) }
    const fd = new FormData(); fd.append('file', file)
    return api.post(`/import/revenue/${versionId}`, fd, { headers: { 'Content-Type': 'multipart/form-data' } }).then(r => r.data)
  }
}
