import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { svc } from '../utils/service'
import { HCPlan, BU_LABELS, BusinessUnit } from '../types'
import { fmtMoney, MONTHS } from '../utils/format'
import { useAuthStore } from '../store/auth'
import toast from 'react-hot-toast'
import { Plus, ArrowLeft } from 'lucide-react'
import ReactECharts from 'echarts-for-react'

const BUS = Object.keys(BU_LABELS) as BusinessUnit[]
const EMPTY = { bu: 'DOMESTIC_MEDICAL' as BusinessUnit, department: '', month: 7, year: 2026, isActual: false, headcount: '', fte: '', baseSalary: '', bonus: '', socialInsur: '', totalCB: '' }

export default function HCPage() {
  const { id } = useParams<{ id: string }>()
  const { user } = useAuthStore()
  const navigate = useNavigate()
  const [records, setRecords] = useState<HCPlan[]>([])
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState(EMPTY)

  const canEdit = user?.role !== 'CEO'
  const load = () => svc.getHC(id!).then(setRecords)
  useEffect(() => { load() }, [id])

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    const data: any = { ...form, versionId: id, month: Number(form.month), year: Number(form.year), headcount: Number(form.headcount), fte: Number(form.fte) }
    ;['baseSalary','bonus','socialInsur','totalCB'].forEach(f => { if (data[f]) data[f] = Number(data[f]) })
    await svc.createHC(data)
    toast.success('已添加'); setShowForm(false); setForm(EMPTY); load()
  }

  const fteByBU = BUS.map(bu => ({
    name: BU_LABELS[bu],
    value: Number(records.filter(r => r.bu === bu).reduce((s, r) => s + Number(r.fte), 0).toFixed(1))
  })).filter(d => d.value > 0)

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <button onClick={() => navigate(`/versions/${id}`)} className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 mb-1"><ArrowLeft className="w-3.5 h-3.5" />返回</button>
          <h1>HC 人员计划</h1>
        </div>
        {canEdit && <button onClick={() => setShowForm(true)} className="btn-primary flex items-center gap-2"><Plus className="w-4 h-4" />新增</button>}
      </div>

      {fteByBU.length > 0 && (
        <div className="card">
          <h2 className="mb-4">FTE 分布（各 BU）</h2>
          <ReactECharts option={{ tooltip: { formatter: (p: any) => `${p.name}: ${p.value.toFixed(1)} FTE` }, series: [{ type: 'pie', radius: ['40%', '65%'], data: fteByBU }] }} style={{ height: 220 }} />
        </div>
      )}

      <div className="card p-0 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50"><tr>{['BU','部门','月份','人数','FTE','基薪','奖金','社保','C&B合计'].map(h => <th key={h} className="table-th">{h}</th>)}</tr></thead>
          <tbody className="divide-y divide-gray-100">
            {records.map(r => (
              <tr key={r.id} className="hover:bg-gray-50">
                <td className="table-td"><span className="badge bg-indigo-50 text-indigo-700">{BU_LABELS[r.bu]}</span></td>
                <td className="table-td">{r.department}</td>
                <td className="table-td">{MONTHS[r.month - 1]}</td>
                <td className="table-td">{r.headcount}</td>
                <td className="table-td font-medium">{Number(r.fte).toFixed(1)}</td>
                <td className="table-td">{r.baseSalary ? fmtMoney(r.baseSalary) : '-'}</td>
                <td className="table-td">{r.bonus ? fmtMoney(r.bonus) : '-'}</td>
                <td className="table-td">{r.socialInsur ? fmtMoney(r.socialInsur) : '-'}</td>
                <td className="table-td font-medium">{r.totalCB ? fmtMoney(r.totalCB) : '-'}</td>
              </tr>
            ))}
            {records.length === 0 && <tr><td colSpan={9} className="table-td text-center text-gray-400 py-12">暂无数据</td></tr>}
          </tbody>
        </table>
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <h2 className="mb-4">新增人员计划</h2>
            <form onSubmit={submit} className="grid grid-cols-2 gap-4">
              <div><label className="label">BU</label><select className="input" value={form.bu} onChange={e => setForm(f => ({ ...f, bu: e.target.value as BusinessUnit }))}>{BUS.map(b => <option key={b} value={b}>{BU_LABELS[b]}</option>)}</select></div>
              <div><label className="label">部门</label><input className="input" value={form.department} onChange={e => setForm(f => ({ ...f, department: e.target.value }))} required /></div>
              <div><label className="label">月份</label><select className="input" value={form.month} onChange={e => setForm(f => ({ ...f, month: Number(e.target.value) }))}>{MONTHS.map((m, i) => <option key={i} value={i + 1}>{m}</option>)}</select></div>
              <div><label className="label">年份</label><input type="number" className="input" value={form.year} onChange={e => setForm(f => ({ ...f, year: Number(e.target.value) }))} /></div>
              <div><label className="label">人数</label><input type="number" className="input" value={form.headcount} onChange={e => setForm(f => ({ ...f, headcount: e.target.value }))} required /></div>
              <div><label className="label">FTE</label><input type="number" step="0.01" className="input" value={form.fte} onChange={e => setForm(f => ({ ...f, fte: e.target.value }))} required /></div>
              {[['baseSalary','基本薪资（元）'],['bonus','奖金（元）'],['socialInsur','社保（元）'],['totalCB','C&B合计（元）']].map(([k, l]) => (
                <div key={k}><label className="label">{l}</label><input type="number" step="any" className="input" value={(form as any)[k]} onChange={e => setForm(f => ({ ...f, [k]: e.target.value }))} /></div>
              ))}
              <div className="col-span-2 flex gap-3"><button type="submit" className="btn-primary flex-1">保存</button><button type="button" onClick={() => setShowForm(false)} className="btn-secondary flex-1">取消</button></div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
