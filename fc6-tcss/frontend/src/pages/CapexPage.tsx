import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import api from '../utils/api'
import { CapexPlan, BU_LABELS, BusinessUnit } from '../types'
import { fmtMoney, fmtPct, MONTHS } from '../utils/format'
import { useAuthStore } from '../store/auth'
import toast from 'react-hot-toast'
import { Plus, ArrowLeft } from 'lucide-react'

const BUS = Object.keys(BU_LABELS) as BusinessUnit[]
const CATS = ['仪器投放', '自动化项目', '设备采购', 'IT系统', '其他']
const EMPTY = { bu: 'DOMESTIC_MEDICAL' as BusinessUnit, projectName: '', category: '仪器投放', month: 7, year: 2026, amount: '', depreciationLife: 60, monthlyDepr: '', efficiencyGain: '', roi: '', notes: '' }

export default function CapexPage() {
  const { id } = useParams<{ id: string }>()
  const { user } = useAuthStore()
  const navigate = useNavigate()
  const [records, setRecords] = useState<CapexPlan[]>([])
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState(EMPTY)

  const canEdit = user?.role !== 'CEO'
  const load = () => api.get(`/capex?versionId=${id}`).then(r => setRecords(r.data))
  useEffect(() => { load() }, [id])

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    const data: any = { ...form, versionId: id, month: Number(form.month), year: Number(form.year), amount: Number(form.amount), depreciationLife: Number(form.depreciationLife) }
    ;['monthlyDepr', 'efficiencyGain', 'roi'].forEach(f => { if (data[f]) data[f] = Number(data[f]) })
    await api.post('/capex', data)
    toast.success('已添加'); setShowForm(false); setForm(EMPTY); load()
  }

  const total = records.reduce((s, r) => s + Number(r.amount), 0)

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <button onClick={() => navigate(`/versions/${id}`)} className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 mb-1"><ArrowLeft className="w-3.5 h-3.5" />返回</button>
          <h1>Capex 资本支出计划</h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-sm text-gray-500">总 Capex: <span className="font-semibold text-gray-900">{fmtMoney(total)}</span></div>
          {canEdit && <button onClick={() => setShowForm(true)} className="btn-primary flex items-center gap-2"><Plus className="w-4 h-4" />新增</button>}
        </div>
      </div>

      <div className="card p-0 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50"><tr>{['BU', '项目名称', '类别', '月份', '投资金额', '折旧月数', '月折旧', '效率提升', 'ROI'].map(h => <th key={h} className="table-th">{h}</th>)}</tr></thead>
          <tbody className="divide-y divide-gray-100">
            {records.map(r => (
              <tr key={r.id} className="hover:bg-gray-50">
                <td className="table-td"><span className="badge bg-teal-50 text-teal-700">{BU_LABELS[r.bu]}</span></td>
                <td className="table-td font-medium">{r.projectName}</td>
                <td className="table-td text-gray-500">{r.category}</td>
                <td className="table-td">{MONTHS[r.month - 1]}</td>
                <td className="table-td font-medium">{fmtMoney(r.amount)}</td>
                <td className="table-td">{r.depreciationLife}月</td>
                <td className="table-td">{r.monthlyDepr ? fmtMoney(r.monthlyDepr) : '-'}</td>
                <td className="table-td">{r.efficiencyGain ? fmtPct(r.efficiencyGain) : '-'}</td>
                <td className="table-td">{r.roi ? fmtPct(r.roi) : '-'}</td>
              </tr>
            ))}
            {records.length === 0 && <tr><td colSpan={9} className="table-td text-center text-gray-400 py-12">暂无数据</td></tr>}
          </tbody>
        </table>
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <h2 className="mb-4">新增 Capex 计划</h2>
            <form onSubmit={submit} className="grid grid-cols-2 gap-4">
              <div><label className="label">BU</label><select className="input" value={form.bu} onChange={e => setForm(f => ({ ...f, bu: e.target.value as BusinessUnit }))}>{BUS.map(b => <option key={b} value={b}>{BU_LABELS[b]}</option>)}</select></div>
              <div><label className="label">项目名称</label><input className="input" value={form.projectName} onChange={e => setForm(f => ({ ...f, projectName: e.target.value }))} required /></div>
              <div><label className="label">类别</label><select className="input" value={form.category} onChange={e => setForm(f => ({ ...f, category: e.target.value }))}>{CATS.map(c => <option key={c}>{c}</option>)}</select></div>
              <div><label className="label">月份</label><select className="input" value={form.month} onChange={e => setForm(f => ({ ...f, month: Number(e.target.value) }))}>{MONTHS.map((m, i) => <option key={i} value={i + 1}>{m}</option>)}</select></div>
              <div><label className="label">年份</label><input type="number" className="input" value={form.year} onChange={e => setForm(f => ({ ...f, year: Number(e.target.value) }))} /></div>
              <div><label className="label">投资金额（元）</label><input type="number" step="any" className="input" value={form.amount} onChange={e => setForm(f => ({ ...f, amount: e.target.value }))} required /></div>
              <div><label className="label">折旧月数</label><input type="number" className="input" value={form.depreciationLife} onChange={e => setForm(f => ({ ...f, depreciationLife: Number(e.target.value) }))} /></div>
              <div><label className="label">月折旧（元）</label><input type="number" step="any" className="input" value={form.monthlyDepr} onChange={e => setForm(f => ({ ...f, monthlyDepr: e.target.value }))} /></div>
              <div><label className="label">效率提升（%）</label><input type="number" step="any" className="input" value={form.efficiencyGain} onChange={e => setForm(f => ({ ...f, efficiencyGain: e.target.value }))} /></div>
              <div><label className="label">ROI（%）</label><input type="number" step="any" className="input" value={form.roi} onChange={e => setForm(f => ({ ...f, roi: e.target.value }))} /></div>
              <div className="col-span-2 flex gap-3"><button type="submit" className="btn-primary flex-1">保存</button><button type="button" onClick={() => setShowForm(false)} className="btn-secondary flex-1">取消</button></div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
