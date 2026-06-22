import { useEffect, useState } from 'react'
import { svc } from '../utils/service'
import { BU_LABELS, BusinessUnit } from '../types'
import { useAuthStore } from '../store/auth'
import toast from 'react-hot-toast'
import { Plus, Target } from 'lucide-react'

const BUS = Object.keys(BU_LABELS) as BusinessUnit[]
const EMPTY = { bu: 'DOMESTIC_MEDICAL' as BusinessUnit, kpiName: '', kpiCode: '', unit: '%', historical: '', budget: '', tenYearPlan: '', warnLow: '', warnHigh: '', year: 2026 }

export default function KPIPage() {
  const { user } = useAuthStore()
  const [benchmarks, setBenchmarks] = useState<any[]>([])
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState(EMPTY)

  const canEdit = user?.role === 'FINANCE' || user?.role === 'ADMIN'
  const load = () => svc.getKPI().then(setBenchmarks)
  useEffect(() => { load() }, [])

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    const data: any = { ...form, year: Number(form.year) }
    ;['historical','budget','tenYearPlan','warnLow','warnHigh'].forEach(f => { if (data[f] !== '') data[f] = Number(data[f]) })
    await svc.createKPI(data)
    toast.success('已添加'); setShowForm(false); setForm(EMPTY); load()
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1>KPI 基准库</h1>
          <p className="text-gray-500 text-sm mt-1">管理历史实际、年度预算、10年规划基准值及预警阈值</p>
        </div>
        {canEdit && <button onClick={() => setShowForm(true)} className="btn-primary flex items-center gap-2"><Plus className="w-4 h-4" />新增基准</button>}
      </div>

      {benchmarks.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          <Target className="w-12 h-12 mx-auto mb-3 opacity-30" />
          <p>暂无 KPI 基准数据</p>
          {canEdit && <button onClick={() => setShowForm(true)} className="btn-primary mt-4">添加第一个 KPI 基准</button>}
        </div>
      ) : (
        <div className="card p-0 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50"><tr>{['BU','KPI 名称','代码','单位','历史实际','年度预算','10年规划','预警下限','预警上限','年份'].map(h => <th key={h} className="table-th">{h}</th>)}</tr></thead>
            <tbody className="divide-y divide-gray-100">
              {benchmarks.map(b => (
                <tr key={b.id} className="hover:bg-gray-50">
                  <td className="table-td"><span className="badge bg-blue-50 text-blue-700">{BU_LABELS[b.bu as BusinessUnit]}</span></td>
                  <td className="table-td font-medium">{b.kpiName}</td>
                  <td className="table-td text-gray-500 font-mono text-xs">{b.kpiCode}</td>
                  <td className="table-td">{b.unit}</td>
                  <td className="table-td">{b.historical ?? '-'}</td>
                  <td className="table-td">{b.budget ?? '-'}</td>
                  <td className="table-td">{b.tenYearPlan ?? '-'}</td>
                  <td className="table-td text-red-500">{b.warnLow ?? '-'}</td>
                  <td className="table-td text-orange-500">{b.warnHigh ?? '-'}</td>
                  <td className="table-td text-gray-400">{b.year}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <h2 className="mb-4">新增 KPI 基准</h2>
            <form onSubmit={submit} className="grid grid-cols-2 gap-4">
              <div><label className="label">BU</label><select className="input" value={form.bu} onChange={e => setForm(f => ({ ...f, bu: e.target.value as BusinessUnit }))}>{BUS.map(b => <option key={b} value={b}>{BU_LABELS[b]}</option>)}</select></div>
              <div><label className="label">KPI 名称</label><input className="input" value={form.kpiName} onChange={e => setForm(f => ({ ...f, kpiName: e.target.value }))} required /></div>
              <div><label className="label">KPI 代码</label><input className="input" value={form.kpiCode} onChange={e => setForm(f => ({ ...f, kpiCode: e.target.value }))} required /></div>
              <div><label className="label">单位</label><input className="input" value={form.unit} onChange={e => setForm(f => ({ ...f, unit: e.target.value }))} /></div>
              {[['historical','历史实际'],['budget','年度预算'],['tenYearPlan','10年规划'],['warnLow','预警下限'],['warnHigh','预警上限']].map(([k, l]) => (
                <div key={k}><label className="label">{l}</label><input type="number" step="any" className="input" value={(form as any)[k]} onChange={e => setForm(f => ({ ...f, [k]: e.target.value }))} /></div>
              ))}
              <div><label className="label">年份</label><input type="number" className="input" value={form.year} onChange={e => setForm(f => ({ ...f, year: Number(e.target.value) }))} /></div>
              <div className="col-span-2 flex gap-3"><button type="submit" className="btn-primary flex-1">保存</button><button type="button" onClick={() => setShowForm(false)} className="btn-secondary flex-1">取消</button></div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
