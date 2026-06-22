import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { svc } from '../utils/service'
import { ExpenseRecord, BU_LABELS, BusinessUnit } from '../types'
import { fmtMoney, MONTHS } from '../utils/format'
import { useAuthStore } from '../store/auth'
import toast from 'react-hot-toast'
import { Plus, ArrowLeft } from 'lucide-react'

const BUS = Object.keys(BU_LABELS) as BusinessUnit[]
const CATS = ['维持性费用', '电商费用', 'HC C&B', '包装测试费', '差旅费', '市场推广', '研发投入', '其他']
const EMPTY = { bu: 'DOMESTIC_MEDICAL' as BusinessUnit, category: '维持性费用', subcategory: '', month: 7, year: 2026, isActual: false, amount: '', notes: '' }

export default function ExpensesPage() {
  const { id } = useParams<{ id: string }>()
  const { user } = useAuthStore()
  const navigate = useNavigate()
  const [records, setRecords] = useState<ExpenseRecord[]>([])
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState(EMPTY)

  const canEdit = user?.role !== 'CEO'
  const load = () => svc.getExpenses(id!).then(setRecords)
  useEffect(() => { load() }, [id])

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    await svc.createExpense({ ...form, versionId: id, month: Number(form.month), year: Number(form.year), amount: Number(form.amount) })
    toast.success('已添加'); setShowForm(false); setForm(EMPTY); load()
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <button onClick={() => navigate(`/versions/${id}`)} className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 mb-1"><ArrowLeft className="w-3.5 h-3.5" />返回</button>
          <h1>费用预测</h1>
        </div>
        {canEdit && <button onClick={() => setShowForm(true)} className="btn-primary flex items-center gap-2"><Plus className="w-4 h-4" />新增</button>}
      </div>

      <div className="card p-0 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50"><tr>{['BU','费用类别','月份','类型','金额','备注'].map(h => <th key={h} className="table-th">{h}</th>)}{canEdit && <th className="table-th">操作</th>}</tr></thead>
          <tbody className="divide-y divide-gray-100">
            {records.map(r => (
              <tr key={r.id} className="hover:bg-gray-50">
                <td className="table-td"><span className="badge bg-purple-50 text-purple-700">{BU_LABELS[r.bu]}</span></td>
                <td className="table-td">{r.category}{r.subcategory ? ` / ${r.subcategory}` : ''}</td>
                <td className="table-td">{MONTHS[r.month - 1]}</td>
                <td className="table-td"><span className={`badge ${r.isActual ? 'bg-gray-100 text-gray-600' : 'bg-orange-50 text-orange-700'}`}>{r.isActual ? 'YTD' : 'FC'}</span></td>
                <td className="table-td font-medium">{fmtMoney(r.amount)}</td>
                <td className="table-td text-gray-400 text-xs">{r.notes || '-'}</td>
                {canEdit && <td className="table-td"><button onClick={async () => { await svc.deleteExpense(r.id); toast.success('已删除'); load() }} className="text-red-500 text-xs hover:underline">删除</button></td>}
              </tr>
            ))}
            {records.length === 0 && <tr><td colSpan={7} className="table-td text-center text-gray-400 py-12">暂无数据</td></tr>}
          </tbody>
        </table>
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-lg">
            <h2 className="mb-4">新增费用记录</h2>
            <form onSubmit={submit} className="grid grid-cols-2 gap-4">
              <div><label className="label">BU</label><select className="input" value={form.bu} onChange={e => setForm(f => ({ ...f, bu: e.target.value as BusinessUnit }))}>{BUS.map(b => <option key={b} value={b}>{BU_LABELS[b]}</option>)}</select></div>
              <div><label className="label">费用类别</label><select className="input" value={form.category} onChange={e => setForm(f => ({ ...f, category: e.target.value }))}>{CATS.map(c => <option key={c}>{c}</option>)}</select></div>
              <div><label className="label">子类（选填）</label><input className="input" value={form.subcategory} onChange={e => setForm(f => ({ ...f, subcategory: e.target.value }))} /></div>
              <div><label className="label">月份</label><select className="input" value={form.month} onChange={e => setForm(f => ({ ...f, month: Number(e.target.value) }))}>{MONTHS.map((m, i) => <option key={i} value={i + 1}>{m}</option>)}</select></div>
              <div><label className="label">类型</label><select className="input" value={form.isActual ? 'actual' : 'fc'} onChange={e => setForm(f => ({ ...f, isActual: e.target.value === 'actual' }))}><option value="actual">YTD实际</option><option value="fc">FC预测</option></select></div>
              <div><label className="label">金额（元）</label><input type="number" step="any" className="input" value={form.amount} onChange={e => setForm(f => ({ ...f, amount: e.target.value }))} required /></div>
              <div className="col-span-2"><label className="label">备注</label><textarea className="input" rows={2} value={form.notes} onChange={e => setForm(f => ({ ...f, notes: e.target.value }))} /></div>
              <div className="col-span-2 flex gap-3"><button type="submit" className="btn-primary flex-1">保存</button><button type="button" onClick={() => setShowForm(false)} className="btn-secondary flex-1">取消</button></div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
