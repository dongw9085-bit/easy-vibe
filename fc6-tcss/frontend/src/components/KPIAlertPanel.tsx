/**
 * KPI 预警面板 — 实时展示版本预警，支持红/黄/绿三色
 */
import { useEffect, useState } from 'react'
import { svc } from '../utils/service'

interface KPIAlert {
  kpiCode: string
  kpiName: string
  bu: string
  actual: number
  target: number
  deviation: number
  level: 'RED' | 'YELLOW' | 'GREEN'
  message: string
}

interface Props { versionId: string }

const LEVEL_CONFIG = {
  RED:    { bg: 'bg-red-900/30',    border: 'border-red-700',    dot: 'bg-red-500',    label: '严重', icon: '🔴' },
  YELLOW: { bg: 'bg-yellow-900/20', border: 'border-yellow-700', dot: 'bg-yellow-400', label: '注意', icon: '🟡' },
  GREEN:  { bg: 'bg-green-900/20',  border: 'border-green-700',  dot: 'bg-green-500',  label: '正常', icon: '🟢' },
}

export function KPIAlertPanel({ versionId }: Props) {
  const [alerts, setAlerts] = useState<KPIAlert[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!versionId) return
    svc.getKPIAlerts(versionId)
      .then(data => setAlerts(data as KPIAlert[]))
      .finally(() => setLoading(false))
  }, [versionId])

  if (loading) {
    return (
      <div className="space-y-2 p-4">
        {[1, 2, 3].map(i => (
          <div key={i} className="h-14 bg-gray-800 rounded-lg animate-pulse" />
        ))}
      </div>
    )
  }

  if (alerts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-gray-500">
        <span className="text-3xl mb-2">✅</span>
        <p className="text-sm">当前版本无 KPI 预警</p>
      </div>
    )
  }

  const red    = alerts.filter(a => a.level === 'RED')
  const yellow = alerts.filter(a => a.level === 'YELLOW')

  return (
    <div className="space-y-3">
      {/* 摘要 */}
      <div className="flex gap-3 text-sm">
        {red.length > 0 && (
          <span className="px-2 py-0.5 rounded-full bg-red-900/40 text-red-400 border border-red-700 font-semibold">
            🔴 {red.length} 严重
          </span>
        )}
        {yellow.length > 0 && (
          <span className="px-2 py-0.5 rounded-full bg-yellow-900/40 text-yellow-400 border border-yellow-700 font-semibold">
            🟡 {yellow.length} 注意
          </span>
        )}
      </div>

      {/* 预警列表 */}
      <div className="space-y-2 max-h-80 overflow-y-auto pr-1">
        {alerts.map((alert, i) => {
          const cfg = LEVEL_CONFIG[alert.level]
          return (
            <div
              key={i}
              className={`flex items-start gap-3 p-3 rounded-lg border ${cfg.bg} ${cfg.border}`}
            >
              <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${cfg.dot}`} />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-gray-300">{alert.kpiName}</span>
                  <span className="text-xs text-gray-500">{alert.bu}</span>
                </div>
                <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">{alert.message}</p>
              </div>
              <span className="text-xs text-gray-500 flex-shrink-0">偏差 {alert.deviation}%</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
