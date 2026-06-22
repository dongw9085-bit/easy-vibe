import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { svc } from '../utils/service'
import { fmtMoney, fmtPct, MONTHS } from '../utils/format'
import { useAuthStore } from '../store/auth'
import toast from 'react-hot-toast'
import { Plus, ArrowLeft } from 'lucide-react'
import ReactECharts from 'echarts-for-react'

const SITES = ['厦门', '长汀', '北京', '苏州仪器', '苏州试剂']
const EMPTY = { site: '厦门', sku: '', month: 7, year: 2026, isActual: false, plannedVolume: '', directMaterial: '', externalMaterial: '', directLabor: '', consumables: '', energy: '', qcCost: '', indirectMfg: '', depreciationAmt: '', yieldRate: '', oee: '', inventoryDays: '' }

export default function ProductionPage() {
  const { id } = useParams<{ id: string }>()
  const { user } = useAuthStore()
  const navigate = useNavigate()
  const [records, setRecords] = useState<any[]>([])
  const [siteSummary, setSiteSummary] = useState<any[]>([])
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState(EMPTY)
  const [siteFilter, setSiteFilter] = useState('')

  const canEdit = user?.role !== 'CEO'
  const load = () => {
    svc.getProduction(id!, siteFilter || undefined).then(setRecords)
    svc.getProductionSiteSummary(id!).then(setSiteSummary)
  }
  useEffect(() => { load() }, [id, siteFilter])

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    const data: any = { ...form, versionId: id, month: Number(form.month), year: Number(form.year) }
    ;['plannedVolume','directMaterial','externalMaterial','directLabor','consumables','energy','qcCost','indirectMfg','depreciationAmt','yieldRate','oee','inventoryDays'].forEach(f => { if (data[f] !== '') data[f] = Number(data[f]) })
    await svc.createProduction(data)
    toast.success('已添加'); setShowForm(false); setForm(EMPTY); load()
  }

  const oeeData = siteSummary.filter(s => !s.isActual).map(s => ({ name: s.site, value: Number(s._avg?.oee || 0) * 100 }))

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <button onClick={() => navigate(`/versions/${id}`)} className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 mb-1"><ArrowLeft className="w-3.5 h-3.5" />返回</button>
          <h1>生产成本预测</h1>
        </div>
        {canEdit && <button onClick={() => setShowForm(true)} className="btn-primary flex items-center gap-2"><Plus className="w-4 h-4" />新增</button>}
      </div>

      {oeeData.length > 0 && (
        <div className="card">
          <h2 className="mb-4">各基地 OEE（预测均值）</h2>
          <ReactECharts option={{ tooltip: {}, xAxis: { type: 'category', data: oeeData.map(d => d.name) }, yAxis: { type: 'value', max: 100, axisLabel: { formatter: '{value}%' } }, series: [{ type: 'bar', data: oeeData.map(d => d.value), itemStyle: { color: '#8b5cf6' } }] }} style={{ height: 200 }} />
        </div>
      )}

      <div className="flex gap-2">
        <button onClick={() => setSiteFilter('')} className={siteFilter === '' ? 'btn-primary text-sm' : 'btn-secondary text-sm'}>全部</button>
        {SITES.map(s => <button key={s} onClick={() => setSiteFilter(s)} className={siteFilter === s ? 'btn-primary text-sm' : 'btn-secondary text-sm'}>{s}</button>)}
      </div>

      {records.length === 0 ? (
        <div className="card text-center py-16 text-gray-400">
          <p className="text-lg mb-2">暂无生产成本数据</p>
          <p className="text-sm">点击「新增」按钮录入各基地 BOM 成本数据</p>
        </div>
      ) : (
        <div className="card p-0 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50"><tr>{['基地','SKU','月份','类型','计划产量','直接材料','外购材料','直接人工','耗材','能源','质检','间接制造','折旧','得率','OEE','周转天'].map(h => <th key={h} className="table-th">{h}</th>)}</tr></thead>
              <tbody className="divide-y divide-gray-100">
                {records.map(r => (
                  <tr key={r.id} className="hover:bg-gray-50">
                    <td className="table-td font-medium">{r.site}</td>
                    <td className="table-td">{r.sku}</td>
                    <td className="table-td">{MONTHS[r.month - 1]}</td>
                    <td className="table-td"><span className={`badge ${r.isActual ? 'bg-gray-100 text-gray-600' : 'bg-violet-50 text-violet-700'}`}>{r.isActual ? 'YTD' : 'FC'}</span></td>
                    <td className="table-td">{r.plannedVolume || '-'}</td>
                    {['directMaterial','externalMaterial','directLabor','consumables','energy','qcCost','indirectMfg','depreciationAmt'].map(f => <td key={f} className="table-td">{r[f] ? fmtMoney(Number(r[f])) : '-'}</td>)}
                    <td className="table-td">{r.yieldRate ? fmtPct(Number(r.yieldRate) * 100) : '-'}</td>
                    <td className="table-td">{r.oee ? fmtPct(Number(r.oee) * 100) : '-'}</td>
                    <td className="table-td">{r.inventoryDays ? `${r.inventoryDays}天` : '-'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <h2 className="mb-4">新增生产成本记录</h2>
            <form onSubmit={submit} className="grid grid-cols-2 gap-4">
              <div><label className="label">基地</label><select className="input" value={form.site} onChange={e => setForm(f => ({ ...f, site: e.target.value }))}>{SITES.map(s => <option key={s}>{s}</option>)}</select></div>
              <div><label className="label">SKU</label><input className="input" value={form.sku} onChange={e => setForm(f => ({ ...f, sku: e.target.value }))} required /></div>
              <div><label className="label">月份</label><select className="input" value={form.month} onChange={e => setForm(f => ({ ...f, month: Number(e.target.value) }))}>{MONTHS.map((m, i) => <option key={i} value={i + 1}>{m}</option>)}</select></div>
              <div><label className="label">年份</label><input type="number" className="input" value={form.year} onChange={e => setForm(f => ({ ...f, year: Number(e.target.value) }))} /></div>
              <div><label className="label">类型</label><select className="input" value={form.isActual ? 'actual' : 'fc'} onChange={e => setForm(f => ({ ...f, isActual: e.target.value === 'actual' }))}><option value="actual">YTD实际</option><option value="fc">FC预测</option></select></div>
              <div><label className="label">计划产量</label><input type="number" step="any" className="input" value={form.plannedVolume} onChange={e => setForm(f => ({ ...f, plannedVolume: e.target.value }))} /></div>
              {[['directMaterial','直接材料（元）'],['externalMaterial','外购材料（元）'],['directLabor','直接人工（元）'],['consumables','耗材（元）'],['energy','能源（元）'],['qcCost','质检（元）'],['indirectMfg','间接制造（元）'],['depreciationAmt','折旧（元）'],['yieldRate','得率（0-1）'],['oee','OEE（0-1）'],['inventoryDays','周转天数']].map(([k, l]) => (
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
