import React, { useCallback, useEffect, useState } from 'react'
import { fmt, getSummary } from '../api.js'
import PetWaterfall from './PetWaterfall.jsx'
import PetMatrix from './PetMatrix.jsx'
import PetSkuTable from './PetSkuTable.jsx'
import PetParamsPanel from './PetParamsPanel.jsx'

const VIEWS = [
  ['overview', '概览'],
  ['matrix', '省份 × 产品线'],
  ['sku', 'SKU 明细']
]

export default function PetPage() {
  const [summary, setSummary] = useState(null)
  const [error, setError] = useState(null)
  const [view, setView] = useState('overview')
  const [tier, setTier] = useState('yellow')
  const [showParams, setShowParams] = useState(false)
  const [reloadKey, setReloadKey] = useState(0)

  const reload = useCallback(() => {
    getSummary()
      .then((s) => {
        setSummary(s)
        setError(null)
        setReloadKey((k) => k + 1)
      })
      .catch((e) => setError(String(e)))
  }, [])

  useEffect(() => {
    reload()
  }, [reload])

  if (error) return <div className="pet-error">加载失败：{error}</div>
  if (!summary) return <div className="pet-loading">加载中…</div>

  const f = summary.facts
  return (
    <div className="pet-page">
      <header className="pet-header">
        <h1>国内宠物 BU · 收入预测</h1>
        <div className="pet-facts">
          <span>在营 {f.devices.toLocaleString()} 台</span>
          <span>单台月产 ¥{fmt(f.per_dev, 1)}</span>
          <span>价源 {f.price_source === 'act' ? '活动价' : '常规价'}</span>
          <span>僵尸机 {f.zombie_n.toLocaleString()} 台</span>
          <span>
            C1 在营 {f.c1_existing} 台 / 新投 {f.c1_new_h2} 台
          </span>
        </div>
        <button className="pet-gear" onClick={() => setShowParams((v) => !v)} title="参数面板">
          ⚙ 参数
        </button>
      </header>

      <nav className="pet-tabs">
        {VIEWS.map(([k, label]) => (
          <button key={k} className={view === k ? 'active' : ''} onClick={() => setView(k)}>
            {label}
          </button>
        ))}
      </nav>

      {showParams && <PetParamsPanel onChanged={reload} />}

      {view === 'overview' && <PetWaterfall summary={summary} tier={tier} onTier={setTier} />}
      {view === 'matrix' && <PetMatrix tier={tier} onTier={setTier} reloadKey={reloadKey} />}
      {view === 'sku' && <PetSkuTable tier={tier} onTier={setTier} reloadKey={reloadKey} />}

      <footer className="pet-footer">
        数据源：{summary.data_mode.source}（{summary.data_mode.generated}）· H1 口径：
        {summary.data_mode.h1 === 'dw' ? 'DW 真实开票净额' : '估算（DW 未灌）'} · 单位：万元 ·
        提示：H1 为真实开票（促销价约挂牌半价），H2 基准为价目表价 × 检测量，同格 H1→H2 存在口径跳变
      </footer>
    </div>
  )
}
