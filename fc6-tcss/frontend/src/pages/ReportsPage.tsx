import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import ReactECharts from 'echarts-for-react'
import { svc } from '../utils/service'
import { EBITResult, BU_LABELS } from '../types'
import { fmtMoney, fmtPct } from '../utils/format'
import { Download, ArrowLeft, TrendingUp, TrendingDown } from 'lucide-react'

export default function ReportsPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [ebit, setEbit] = useState<EBITResult[]>([])
  const [summary, setSummary] = useState<any>(null)

  useEffect(() => {
    svc.getEBIT(id!).then(setEbit)
    svc.getVersionSummary(id!).then(setSummary)
  }, [id])

  const fcData = ebit.filter(e => !e.isActual)
  const totalRevenue = fcData.reduce((s, e) => s + e.revenue, 0)
  const totalEBIT = fcData.reduce((s, e) => s + e.ebit, 0)
  const totalGP = fcData.reduce((s, e) => s + e.grossProfit, 0)
  const totalExp = fcData.reduce((s, e) => s + e.expenses, 0)

  const revenueVsExpOption = {
    tooltip: { trigger: 'axis' },
    legend: { data: ['收入', '毛利润', '费用', 'EBIT'], bottom: 0 },
    xAxis: { type: 'category', data: fcData.map(e => BU_LABELS[e.bu]) },
    yAxis: { type: 'value', axisLabel: { formatter: (v: number) => `${(v / 10000).toFixed(0)}万` } },
    series: [
      { name: '收入', type: 'bar', data: fcData.map(e => e.revenue), itemStyle: { color: '#bfdbfe' } },
      { name: '毛利润', type: 'bar', data: fcData.map(e => e.grossProfit), itemStyle: { color: '#3b82f6' } },
      { name: '费用', type: 'bar', data: fcData.map(e => e.expenses), itemStyle: { color: '#fca5a5' } },
      { name: 'EBIT', type: 'bar', data: fcData.map(e => e.ebit), itemStyle: { color: '#10b981' } }
    ]
  }

  const marginRadarOption = {
    tooltip: {},
    radar: { indicator: fcData.map(e => ({ name: BU_LABELS[e.bu], max: 100 })) },
    series: [{ type: 'radar', data: [{ value: fcData.map(e => e.grossMarginPct), name: '毛利率%' }], areaStyle: { opacity: 0.2 } }]
  }

  const ebitTrendOption = {
    tooltip: { trigger: 'axis' },
    xAxis: { type: 'category', data: fcData.map(e => BU_LABELS[e.bu]) },
    yAxis: { type: 'value', axisLabel: { formatter: (v: number) => `${(v / 10000).toFixed(0)}万` } },
    series: [{ name: 'EBIT', type: 'bar', data: fcData.map(e => e.ebit), itemStyle: { color: (p: any) => p.value >= 0 ? '#10b981' : '#ef4444' } }]
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <button onClick={() => navigate(`/versions/${id}`)} className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 mb-1"><ArrowLeft className="w-3.5 h-3.5" />返回</button>
          <h1>管理报表 — FC6+6 预测结果</h1>
        </div>
        <button onClick={() => svc.downloadExcel(id!)} className="btn-primary flex items-center gap-2"><Download className="w-4 h-4" />导出完整报表</button>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: '公司总收入 (FC H2)', value: fmtMoney(totalRevenue), sub: '7-12月预测合计' },
          { label: '公司总毛利润', value: fmtMoney(totalGP), sub: `毛利率 ${totalRevenue ? fmtPct(totalGP / totalRevenue * 100) : '-'}` },
          { label: '公司 EBIT', value: fmtMoney(totalEBIT), sub: `EBIT率 ${totalRevenue ? fmtPct(totalEBIT / totalRevenue * 100) : '-'}` },
          { label: '总 FTE', value: summary ? `${Number(summary.totalFTE).toFixed(0)} 人` : '-', sub: `C&B ${summary ? fmtMoney(summary.totalCB) : '-'}` },
        ].map(({ label, value, sub }) => (
          <div key={label} className="card">
            <div className="text-xl font-bold text-gray-900">{value}</div>
            <div className="text-sm text-gray-500 mt-0.5">{label}</div>
            <div className="text-xs text-gray-400 mt-1">{sub}</div>
          </div>
        ))}
      </div>

      <div className="card">
        <h2 className="mb-4">各 BU EBIT 预测（FC H2）</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50"><tr>{['业务单元','预测收入','毛利润','毛利率','费用','EBIT','EBIT率'].map(h => <th key={h} className="table-th">{h}</th>)}</tr></thead>
            <tbody className="divide-y divide-gray-100">
              {fcData.map(e => (
                <tr key={e.bu} className="hover:bg-gray-50">
                  <td className="table-td font-medium">{BU_LABELS[e.bu]}</td>
                  <td className="table-td">{fmtMoney(e.revenue)}</td>
                  <td className="table-td">{fmtMoney(e.grossProfit)}</td>
                  <td className="table-td">{fmtPct(e.grossMarginPct)}</td>
                  <td className="table-td text-red-600">{fmtMoney(e.expenses)}</td>
                  <td className="table-td font-semibold">
                    <span className={e.ebit >= 0 ? 'text-green-600' : 'text-red-600'}>
                      {e.ebit >= 0 ? <TrendingUp className="inline w-3.5 h-3.5 mr-1" /> : <TrendingDown className="inline w-3.5 h-3.5 mr-1" />}
                      {fmtMoney(e.ebit)}
                    </span>
                  </td>
                  <td className="table-td">
                    <span className={`badge ${Number(e.ebitPct) >= 10 ? 'bg-green-100 text-green-700' : Number(e.ebitPct) >= 0 ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'}`}>{e.ebitPct}%</span>
                  </td>
                </tr>
              ))}
              <tr className="bg-gray-50 font-semibold">
                <td className="table-td">合计</td>
                <td className="table-td">{fmtMoney(totalRevenue)}</td>
                <td className="table-td">{fmtMoney(totalGP)}</td>
                <td className="table-td">{totalRevenue ? fmtPct(totalGP / totalRevenue * 100) : '-'}</td>
                <td className="table-td text-red-600">{fmtMoney(totalExp)}</td>
                <td className="table-td text-green-600">{fmtMoney(totalEBIT)}</td>
                <td className="table-td">{totalRevenue ? fmtPct(totalEBIT / totalRevenue * 100) : '-'}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card"><h2 className="mb-4">收入 / 毛利 / 费用 / EBIT 对比</h2><ReactECharts option={revenueVsExpOption} style={{ height: 300 }} /></div>
        <div className="card"><h2 className="mb-4">各 BU 毛利率雷达图</h2><ReactECharts option={marginRadarOption} style={{ height: 300 }} /></div>
      </div>

      <div className="card"><h2 className="mb-4">各 BU EBIT 分布（正 / 负）</h2><ReactECharts option={ebitTrendOption} style={{ height: 260 }} /></div>
    </div>
  )
}
