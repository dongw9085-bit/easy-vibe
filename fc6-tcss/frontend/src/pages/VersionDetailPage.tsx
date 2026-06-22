import { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import api from '../utils/api'
import { ForecastVersion, STATUS_LABELS, BU_LABELS } from '../types'
import { useAuthStore } from '../store/auth'
import { fmtMoney } from '../utils/format'
import toast from 'react-hot-toast'
import { TrendingUp, Receipt, Users, Building2, Factory, BarChart3, Download, CheckCircle, XCircle, Clock } from 'lucide-react'

const APPROVAL_ACTIONS: Record<string, { label: string; action: string; style: string; roles: string[] }[]> = {
  DRAFT: [{ label: '提交审批', action: 'SUBMIT', style: 'btn-primary', roles: ['BUSINESS', 'FINANCE', 'ADMIN'] }],
  SUBMITTED: [
    { label: '财务复核通过', action: 'FINANCE_REVIEW', style: 'btn-primary', roles: ['FINANCE', 'ADMIN'] },
    { label: '驳回', action: 'REJECT', style: 'btn-danger', roles: ['FINANCE', 'ADMIN'] }
  ],
  FINANCE_REVIEWED: [{ label: 'CEO 审批通过', action: 'CEO_APPROVE', style: 'btn-success', roles: ['CEO', 'ADMIN'] }],
  CEO_APPROVED: [{ label: '锁定版本', action: 'LOCK', style: 'btn-primary', roles: ['ADMIN', 'CEO'] }],
  LOCKED: [],
  REJECTED: [{ label: '重新提交', action: 'SUBMIT', style: 'btn-primary', roles: ['BUSINESS', 'FINANCE', 'ADMIN'] }]
}

export default function VersionDetailPage() {
  const { id } = useParams<{ id: string }>()
  const { user } = useAuthStore()
  const navigate = useNavigate()
  const [version, setVersion] = useState<ForecastVersion | null>(null)
  const [summary, setSummary] = useState<any>(null)
  const [history, setHistory] = useState<any[]>([])
  const [comment, setComment] = useState('')

  const load = () => {
    api.get(`/versions`).then(r => setVersion(r.data.find((v: ForecastVersion) => v.id === id) || null))
    api.get(`/versions/${id}/summary`).then(r => setSummary(r.data))
    api.get(`/approvals/${id}/history`).then(r => setHistory(r.data))
  }
  useEffect(() => { load() }, [id])

  const doAction = async (action: string) => {
    await api.post(`/approvals/${id}/action`, { action, comment })
    toast.success('操作成功')
    setComment('')
    load()
  }

  const downloadReport = () => window.open(`/api/reports/${id}/excel`, '_blank')

  const modules = [
    { label: '收入预测', icon: TrendingUp, to: 'revenue' },
    { label: '费用预测', icon: Receipt, to: 'expenses' },
    { label: 'HC 人员计划', icon: Users, to: 'hc' },
    { label: 'Capex 资本支出', icon: Building2, to: 'capex' },
    { label: '生产成本', icon: Factory, to: 'production' },
    { label: '管理报表', icon: BarChart3, to: 'reports' },
  ]

  const actions = version ? (APPROVAL_ACTIONS[version.status] || []).filter(a => user && a.roles.includes(user.role)) : []

  if (!version) return <div className="p-6 text-gray-500">加载中...</div>

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <button onClick={() => navigate('/versions')} className="text-sm text-gray-500 hover:text-gray-700 mb-1">← 返回版本列表</button>
          <h1>{version.name}</h1>
          <div className="flex items-center gap-3 mt-1">
            <span className="text-gray-500 text-sm">周期: {version.period}</span>
            <span className={`badge badge-${version.status.toLowerCase().replace(/_/g, '-')}`}>{STATUS_LABELS[version.status]}</span>
            {version.lockedAt && <span className="text-xs text-gray-400">锁定于 {new Date(version.lockedAt).toLocaleString('zh-CN')}</span>}
          </div>
        </div>
        <button onClick={downloadReport} className="btn-secondary flex items-center gap-2">
          <Download className="w-4 h-4" />
          导出 Excel
        </button>
      </div>

      {/* Summary */}
      {summary && (
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            { label: '预测收入', value: fmtMoney(summary.totalRevenue) },
            { label: '预测费用', value: fmtMoney(summary.totalExpenses) },
            { label: 'EBIT估算', value: fmtMoney(summary.totalRevenue * 0.2 - summary.totalExpenses) },
            { label: '总 FTE', value: `${Number(summary.totalFTE).toFixed(1)} 人` },
            { label: '总 Capex', value: fmtMoney(summary.totalCapex) },
          ].map(({ label, value }) => (
            <div key={label} className="card py-4">
              <div className="text-lg font-bold text-gray-900">{value}</div>
              <div className="text-xs text-gray-500 mt-0.5">{label}</div>
            </div>
          ))}
        </div>
      )}

      {/* Modules */}
      <div>
        <h2 className="mb-3">数据模块</h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {modules.map(({ label, icon: Icon, to }) => (
            <Link key={to} to={`/versions/${id}/${to}`} className="card flex items-center gap-4 hover:border-primary-300 hover:bg-primary-50 transition-colors group">
              <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                <Icon className="w-5 h-5 text-primary-600" />
              </div>
              <div>
                <div className="font-medium text-gray-900">{label}</div>
                <div className="text-xs text-gray-400 mt-0.5">{version.status === 'LOCKED' ? '只读' : '点击录入数据'}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Approval Workflow */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <h2 className="mb-4">审批工作流</h2>
          <div className="flex items-center justify-between mb-6">
            {['DRAFT', 'SUBMITTED', 'FINANCE_REVIEWED', 'CEO_APPROVED', 'LOCKED'].map((s, i) => {
              const statuses = ['DRAFT', 'SUBMITTED', 'FINANCE_REVIEWED', 'CEO_APPROVED', 'LOCKED']
              const curIdx = statuses.indexOf(version.status)
              const done = i < curIdx
              const current = i === curIdx
              return (
                <div key={s} className="flex items-center">
                  <div className={`flex flex-col items-center ${i > 0 ? 'ml-2' : ''}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium
                      ${done ? 'bg-green-100 text-green-700' : current ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-400'}`}>
                      {done ? <CheckCircle className="w-4 h-4" /> : i + 1}
                    </div>
                    <div className={`text-xs mt-1 text-center ${current ? 'text-primary-600 font-medium' : 'text-gray-400'}`}>
                      {STATUS_LABELS[s as keyof typeof STATUS_LABELS]}
                    </div>
                  </div>
                  {i < 4 && <div className={`h-0.5 w-8 mt-[-10px] ${i < curIdx ? 'bg-green-300' : 'bg-gray-200'}`} />}
                </div>
              )
            })}
          </div>
          {actions.length > 0 && (
            <div className="space-y-3">
              <textarea className="input" rows={2} placeholder="审批意见（选填）" value={comment} onChange={e => setComment(e.target.value)} />
              <div className="flex gap-2">
                {actions.map(a => (
                  <button key={a.action} onClick={() => doAction(a.action)} className={`${a.style} flex-1`}>{a.label}</button>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="card">
          <h2 className="mb-4">审批历史</h2>
          <div className="space-y-3 max-h-64 overflow-y-auto">
            {history.map((h, i) => (
              <div key={i} className="flex gap-3">
                <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-3.5 h-3.5 text-gray-500" />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">{h.approver.name} <span className="text-gray-400 font-normal">({h.approver.role})</span></div>
                  <div className="text-xs text-gray-500">{h.action} · {new Date(h.createdAt).toLocaleString('zh-CN')}</div>
                  {h.comment && <div className="text-xs text-gray-600 mt-0.5 bg-gray-50 rounded px-2 py-1">{h.comment}</div>}
                </div>
              </div>
            ))}
            {history.length === 0 && <p className="text-sm text-gray-400">暂无审批记录</p>}
          </div>
        </div>
      </div>
    </div>
  )
}
