import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ReactECharts from 'echarts-for-react'
import api from '../utils/api'
import { ForecastVersion, KPIAlert, EBITResult, STATUS_LABELS, BU_LABELS } from '../types'
import { fmtMoney, fmtPct } from '../utils/format'
import { TrendingUp, AlertTriangle, FileText, CheckCircle } from 'lucide-react'

export default function DashboardPage() {
  const [versions, setVersions] = useState<ForecastVersion[]>([])
  const [alerts, setAlerts] = useState<KPIAlert[]>([])
  const [ebit, setEbit] = useState<EBITResult[]>([])
  const [summary, setSummary] = useState<any>(null)
  const navigate = useNavigate()

  useEffect(() => {
    api.get('/versions').then(r => {
      setVersions(r.data)
      const latest = r.data[0]
      if (latest) {
        api.get(`/versions/${latest.id}/summary`).then(r2 => setSummary(r2.data))
        api.get(`/versions/${latest.id}/kpi-alerts`).then(r2 => setAlerts(r2.data))
        api.get(`/reports/${latest.id}/ebit`).then(r2 => setEbit(r2.data))
      }
    })
  }, [])

  const latestVersion = versions[0]
  const fcEbit = ebit.filter(e => !e.isActual)

  const statusCounts = versions.reduce((acc, v) => {
    acc[v.status] = (acc[v.status] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  const ebitChartOption = {
    tooltip: { trigger: 'axis' },
    legend: { data: ['收入', 'EBIT'], bottom: 0 },
    xAxis: { type: 'category', data: fcEbit.map(e => BU_LABELS[e.bu]) },
    yAxis: { type: 'value', axisLabel: { formatter: (v: number) => `${(v / 10000).toFixed(0)}万` } },
    series: [
      { name: '收入', type: 'bar', data: fcEbit.map(e => e.revenue), itemStyle: { color: '#3b82f6' } },
      { name: 'EBIT', type: 'bar', data: fcEbit.map(e => e.ebit), itemStyle: { color: '#10b981' } }
    ]
  }

  const buMarginOption = {
    tooltip: { formatter: (p: any) => `${p.name}: ${fmtPct(p.value)}` },
    series: [{
      type: 'pie',
      radius: ['40%', '70%'],
      data: fcEbit.map(e => ({ name: BU_LABELS[e.bu], value: e.grossMarginPct })),
      label: { formatter: '{b}\n{d}%' }
    }]
  }

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1>仪表板</h1>
        {latestVersion && (
          <p className="text-gray-500 mt-1">当前版本：{latestVersion.name} ({latestVersion.period}) · <span className={`badge badge-${latestVersion.status.toLowerCase()}`}>{STATUS_LABELS[latestVersion.status]}</span></p>
        )}
      </div>

      {/* KPI Cards */}
      {summary && (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: '预测总收入', value: fmtMoney(summary.totalRevenue), icon: TrendingUp, color: 'text-blue-600 bg-blue-50' },
            { label: '预测总费用', value: fmtMoney(summary.totalExpenses), icon: FileText, color: 'text-purple-600 bg-purple-50' },
            { label: '总 FTE', value: `${summary.totalFTE.toFixed(1)} 人`, icon: CheckCircle, color: 'text-green-600 bg-green-50' },
            { label: '总 Capex', value: fmtMoney(summary.totalCapex), icon: AlertTriangle, color: 'text-orange-600 bg-orange-50' },
          ].map(({ label, value, icon: Icon, color }) => (
            <div key={label} className="card">
              <div className={`inline-flex p-2 rounded-lg ${color} mb-3`}>
                <Icon className="w-5 h-5" />
              </div>
              <div className="text-2xl font-bold text-gray-900">{value}</div>
              <div className="text-sm text-gray-500 mt-1">{label}</div>
            </div>
          ))}
        </div>
      )}

      {/* KPI Alerts */}
      {alerts.length > 0 && (
        <div className="card">
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className="w-5 h-5 text-yellow-500" />
            <h2>KPI 预警 ({alerts.length})</h2>
          </div>
          <div className="space-y-2">
            {alerts.map((a, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                <div>
                  <span className="font-medium text-yellow-800">{BU_LABELS[a.bu]} — {a.kpi}</span>
                  <span className="text-yellow-600 text-sm ml-2">当前值: {fmtPct(a.value)}</span>
                </div>
                <span className={`badge ${a.type === 'LOW' ? 'bg-red-100 text-red-700' : 'bg-orange-100 text-orange-700'}`}>
                  {a.type === 'LOW' ? '低于阈值' : '超出阈值'} {fmtPct(Number(a.threshold))}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Charts */}
      {fcEbit.length > 0 && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="card">
            <h2 className="mb-4">各 BU 收入 & EBIT（FC预测）</h2>
            <ReactECharts option={ebitChartOption} style={{ height: 280 }} />
          </div>
          <div className="card">
            <h2 className="mb-4">各 BU 毛利率分布</h2>
            <ReactECharts option={buMarginOption} style={{ height: 280 }} />
          </div>
        </div>
      )}

      {/* Recent Versions */}
      <div className="card">
        <div className="flex items-center justify-between mb-4">
          <h2>预测版本列表</h2>
          <button onClick={() => navigate('/versions')} className="btn-secondary text-sm">查看全部</button>
        </div>
        <table className="w-full">
          <thead className="bg-gray-50 rounded-t-lg">
            <tr>
              <th className="table-th">版本名称</th>
              <th className="table-th">周期</th>
              <th className="table-th">状态</th>
              <th className="table-th">创建人</th>
              <th className="table-th">操作</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {versions.slice(0, 5).map(v => (
              <tr key={v.id} className="hover:bg-gray-50">
                <td className="table-td font-medium">{v.name}</td>
                <td className="table-td">{v.period}</td>
                <td className="table-td">
                  <span className={`badge badge-${v.status.toLowerCase().replace('_', '-')}`}>{STATUS_LABELS[v.status]}</span>
                </td>
                <td className="table-td text-gray-500">{v.createdBy.name}</td>
                <td className="table-td">
                  <button onClick={() => navigate(`/versions/${v.id}`)} className="text-primary-600 hover:text-primary-700 text-sm font-medium">详情 →</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
