import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import api from '../utils/api'
import { RevenueRecord, BU_LABELS, BusinessUnit } from '../types'
import { fmtMoney, fmtPct, MONTHS } from '../utils/format'
import { useAuthStore } from '../store/auth'
import toast from 'react-hot-toast'
import { Plus, Upload, Download, ArrowLeft } from 'lucide-react'

const BUS = Object.keys(BU_LABELS) as BusinessUnit[]

const EMPTY_FORM = {
  bu: 'DOMESTIC_MEDICAL' as BusinessUnit,
  productLine: '',
  sku: '',
  month: 7,
  year: 2026,
  isActual: false,
  baselineVolume: '',
  incrementVolume: '',
  unitPrice: '',
  baselineRevenue: '',
  growthRevenue: '',
  grossMarginPct: '',
  dso: '',
  notes: ''
}

export default function RevenuePage() {
  const { id } = useParams<{ id: string }>()
  const { user } = useAuthStore()
  const navigate = useNavigate()
  const [records, setRecords] = useState<RevenueRecord[]>([])
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState(EMPTY_FORM)
  const [filter, setFilter] = useState<BusinessUnit | ''>('')
  const [editId, setEditId] = useState<string | null>(null)

  const canEdit = user?.role !== 'CEO'

  const load = () => api.get(`/revenue?versionId=${id}`).then(r => setRecords(r.data))
  useEffect(() => { load() }, [id])

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    const data = { ...form, versionId: id, month: Number(form.month), year: Number(form.year) }
    const numFields = ['baselineVolume', 'incrementVolume', 'unitPrice', 'baselineRevenue', 'growthRevenue', 'grossMarginPct', 'dso']
    numFields.forEach(f => { if ((data as any)[f] !== '') (data as any)[f] = Number((data as any)[f]) })
    if (editId) {
      await api.put(`/revenue/${editId}`, data)
      toast.success('已更新')
    } else {
      await api.post('/revenue', data)
      toast.success('已添加')
    }
    setShowForm(false)
    setForm(EMPTY_FORM)
    setEditId(null)
    load()
  }

  const del = async (recId: string) => {
    await api.delete(`/revenue/${recId}`)
    toast.success('已删除')
    load()
  }

  const startEdit = (r: RevenueRecord) => {
    setForm({ ...r, baselineVolume: r.baselineVolume?.toString() || '', incrementVolume: r.incrementVolume?.toString() || '', unitPrice: r.unitPrice?.toString() || '', baselineRevenue: r.baselineRevenue?.toString() || '', growthRevenue: r.growthRevenue?.toString() || '', grossMarginPct: r.grossMarginPct?.toString() || '', dso: r.dso?.toString() || '', notes: r.notes || '' })
    setEditId(r.id)
    setShowForm(true)
  }

  const downloadTemplate = () => window.open('/api/import/template/revenue', '_blank')

  const uploadFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const fd = new FormData()
    fd.append('file', file)
    const r = await api.post(`/import/revenue/${id}`, fd, { headers: { 'Content-Type': 'multipart/form-data' } })
    toast.success(`已导入 ${r.data.imported} 条数据`)
    load()
    e.target.value = ''
  }

  const displayed = filter ? records.filter(r => r.bu === filter) : records

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <button onClick={() => navigate(`/versions/${id}`)} className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 mb-1"><ArrowLeft className="w-3.5 h-3.5" /> 返回版本详情</button>
          <h1>收入预测</h1>
        </div>
        {canEdit && (
          <div className="flex gap-2">
            <button onClick={downloadTemplate} className="btn-secondary flex items-center gap-2 text-sm"><Download className="w-4 h-4" />下载模板</button>
            <label className="btn-secondary flex items-center gap-2 text-sm cursor-pointer">
              <Upload className="w-4 h-4" />导入 Excel
              <input type="file" accept=".xlsx,.xls" className="hidden" onChange={uploadFile} />
            </label>
            <button onClick={() => { setShowForm(true); setEditId(null); setForm(EMPTY_FORM) }} className="btn-primary flex items-center gap-2 text-sm">
              <Plus className="w-4 h-4" />新增
            </button>
          </div>
        )}
      </div>

      {/* Filter */}
      <div className="flex gap-2 flex-wrap">
        <button onClick={() => setFilter('')} className={filter === '' ? 'btn-primary text-sm' : 'btn-secondary text-sm'}>全部</button>
        {BUS.map(bu => (
          <button key={bu} onClick={() => setFilter(bu)} className={filter === bu ? 'btn-primary text-sm' : 'btn-secondary text-sm'}>{BU_LABELS[bu]}</button>
        ))}
      </div>

      {/* Table */}
      <div className="card p-0 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                {['BU', '产品线', 'SKU', '月份', '类型', '基础收入', '增长收入', '毛利率', 'DSO', '操作'].map(h => (
                  <th key={h} className="table-th">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {displayed.map(r => (
                <tr key={r.id} className="hover:bg-gray-50">
                  <td className="table-td"><span className="badge bg-blue-50 text-blue-700">{BU_LABELS[r.bu]}</span></td>
                  <td className="table-td">{r.productLine}</td>
                  <td className="table-td text-gray-500">{r.sku || '-'}</td>
                  <td className="table-td">{MONTHS[r.month - 1]}</td>
                  <td className="table-td">
                    <span className={`badge ${r.isActual ? 'bg-gray-100 text-gray-600' : 'bg-green-50 text-green-700'}`}>{r.isActual ? 'YTD实际' : 'FC预测'}</span>
                  </td>
                  <td className="table-td">{r.baselineRevenue ? fmtMoney(r.baselineRevenue) : '-'}</td>
                  <td className="table-td">{r.growthRevenue ? fmtMoney(r.growthRevenue) : '-'}</td>
                  <td className="table-td">{r.grossMarginPct ? fmtPct(r.grossMarginPct) : '-'}</td>
                  <td className="table-td">{r.dso ? `${r.dso}天` : '-'}</td>
                  <td className="table-td">
                    {canEdit && (
                      <div className="flex gap-2">
                        <button onClick={() => startEdit(r)} className="text-primary-600 text-xs hover:underline">编辑</button>
                        <button onClick={() => del(r.id)} className="text-red-500 text-xs hover:underline">删除</button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
              {displayed.length === 0 && (
                <tr><td colSpan={10} className="table-td text-center text-gray-400 py-12">暂无数据</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <h2 className="mb-4">{editId ? '编辑' : '新增'}收入记录</h2>
            <form onSubmit={submit} className="grid grid-cols-2 gap-4">
              <div>
                <label className="label">BU</label>
                <select className="input" value={form.bu} onChange={e => setForm(f => ({ ...f, bu: e.target.value as BusinessUnit }))}>
                  {BUS.map(bu => <option key={bu} value={bu}>{BU_LABELS[bu]}</option>)}
                </select>
              </div>
              <div>
                <label className="label">产品线</label>
                <input className="input" value={form.productLine} onChange={e => setForm(f => ({ ...f, productLine: e.target.value }))} required />
              </div>
              <div>
                <label className="label">SKU（选填）</label>
                <input className="input" value={form.sku} onChange={e => setForm(f => ({ ...f, sku: e.target.value }))} />
              </div>
              <div>
                <label className="label">数据类型</label>
                <select className="input" value={form.isActual ? 'actual' : 'forecast'} onChange={e => setForm(f => ({ ...f, isActual: e.target.value === 'actual' }))}>
                  <option value="actual">YTD实际 (1-6月)</option>
                  <option value="forecast">FC预测 (7-12月)</option>
                </select>
              </div>
              <div>
                <label className="label">月份</label>
                <select className="input" value={form.month} onChange={e => setForm(f => ({ ...f, month: Number(e.target.value) }))}>
                  {MONTHS.map((m, i) => <option key={i} value={i + 1}>{m}</option>)}
                </select>
              </div>
              <div>
                <label className="label">年份</label>
                <input type="number" className="input" value={form.year} onChange={e => setForm(f => ({ ...f, year: Number(e.target.value) }))} />
              </div>
              {[
                { key: 'baselineRevenue', label: '基础收入（元）' },
                { key: 'growthRevenue', label: '增长收入（元）' },
                { key: 'baselineVolume', label: '基础销量' },
                { key: 'incrementVolume', label: '增量销量' },
                { key: 'unitPrice', label: '单价（元）' },
                { key: 'grossMarginPct', label: '毛利率（%）' },
                { key: 'dso', label: 'DSO（天）' },
              ].map(({ key, label }) => (
                <div key={key}>
                  <label className="label">{label}</label>
                  <input type="number" step="any" className="input" value={(form as any)[key]} onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))} />
                </div>
              ))}
              <div className="col-span-2">
                <label className="label">备注</label>
                <textarea className="input" rows={2} value={form.notes} onChange={e => setForm(f => ({ ...f, notes: e.target.value }))} />
              </div>
              <div className="col-span-2 flex gap-3">
                <button type="submit" className="btn-primary flex-1">保存</button>
                <button type="button" onClick={() => setShowForm(false)} className="btn-secondary flex-1">取消</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
