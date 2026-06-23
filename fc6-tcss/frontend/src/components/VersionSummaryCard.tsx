/**
 * 版本汇总卡片 — 收入、EBIT、FTE、Capex 四格 KPI
 */
import { useEffect, useState } from 'react'
import { svc } from '../utils/service'

interface Summary {
  totalRevenue: number
  totalEBIT: number
  totalFTE: number
  totalCapex: number
  byBU: {
    bu: string
    buLabel: string
    revenue: number
    grossProfit: number
    expense: number
    ebit: number
    ebitRate: number
  }[]
}

interface Props { versionId: string }

function fmt(n: number) { return (n / 10000).toFixed(1) + '万' }
function fmtPct(n: number) { return (n * 100).toFixed(1) + '%' }

const KPI_CARDS = [
  { key: 'totalRevenue', label: '总收入预测', icon: '💰', color: '#58a6ff', format: fmt },
  { key: 'totalEBIT',    label: 'EBIT',       icon: '📈', color: '#3fb950', format: fmt },
  { key: 'totalFTE',     label: '总 FTE',      icon: '👥', color: '#d2a8ff', format: (n: number) => n.toFixed(0) + ' 人' },
  { key: 'totalCapex',   label: 'Capex 合计',  icon: '🏭', color: '#f0883e', format: fmt },
]

export function VersionSummaryCard({ versionId }: Props) {
  const [summary, setSummary] = useState<Summary | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    svc.getVersionSummary(versionId)
      .then(setSummary as any)
      .finally(() => setLoading(false))
  }, [versionId])

  if (loading) {
    return (
      <div className="grid grid-cols-4 gap-4">
        {[1,2,3,4].map(i => (
          <div key={i} className="h-24 bg-gray-800 rounded-xl animate-pulse" />
        ))}
      </div>
    )
  }

  if (!summary) return null

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {KPI_CARDS.map(card => {
        const value = (summary as any)[card.key] || 0
        return (
          <div
            key={card.key}
            className="bg-gray-900 border border-gray-700 rounded-xl p-4 hover:border-gray-500 transition-colors"
          >
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide">{card.label}</div>
            <div className="text-2xl font-black mt-2 mb-1" style={{ color: card.color }}>
              {card.format(value)}
            </div>
            <div className="text-xs text-gray-500">{card.icon} FC7-12 汇总</div>
          </div>
        )
      })}
    </div>
  )
}
