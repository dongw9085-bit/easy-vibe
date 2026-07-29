import React, { useState } from 'react'
import { fmt, TIER_COLORS, TIER_LABELS } from '../api.js'

/*
 * 概览：档位胶囊 + 六因子瀑布 + 红→黄→绿差额 + 取数抽屉。
 * 因子展示顺序在此定义（后端不控制顺序）。
 */

const COMP_ORDER = ['基准', '僵尸机激活', '新投放', '经销商压货', '新上市线C1', '返利']

const CONFIDENCE = {
  confirmed: ['已证实', '#3f9a58'],
  assumption: ['有依据假设', '#d9a419'],
  placeholder: ['占位', '#999']
}

export default function PetWaterfall({ summary, tier, onTier }) {
  const [drawer, setDrawer] = useState(null)
  const comps = summary.components[tier]
  const maxAbs = Math.max(...COMP_ORDER.map((k) => Math.abs(comps[k] || 0)), 1)

  return (
    <div className="pet-waterfall">
      <div className="tier-capsules">
        {['red', 'yellow', 'green'].map((t) => (
          <button
            key={t}
            className={`capsule ${tier === t ? 'active' : ''}`}
            style={{ '--tier-color': TIER_COLORS[t] }}
            onClick={() => onTier(t)}
          >
            <span className="capsule-name">{TIER_LABELS[t]}</span>
            <span className="capsule-h2">H2 {fmt(summary.tiers[t])}</span>
            <span className="capsule-fy">全年 {fmt(summary.tiers_fy[t])}</span>
          </button>
        ))}
      </div>

      <div className="tier-deltas">
        黄−红 {fmt(summary.tiers.yellow - summary.tiers.red)} 万（可控增长）· 绿−黄{' '}
        {fmt(summary.tiers.green - summary.tiers.yellow)} 万（不可控上行）
      </div>

      <div className="wf-bars">
        {COMP_ORDER.map((k) => {
          const v = comps[k] || 0
          const prov = summary.provenance[k]
          const [confLabel, confColor] = CONFIDENCE[prov?.confidence] || CONFIDENCE.placeholder
          return (
            <div key={k} className="wf-row" onClick={() => setDrawer(drawer === k ? null : k)}>
              <span className="wf-label">{k}</span>
              <span className="wf-track">
                <span
                  className="wf-bar"
                  style={{
                    width: `${(Math.abs(v) / maxAbs) * 100}%`,
                    background: v < 0 ? '#b5b5b5' : TIER_COLORS[tier]
                  }}
                />
              </span>
              <span className="wf-value">{fmt(v)}</span>
              <span className="wf-conf" style={{ color: confColor }}>
                {confLabel}
              </span>
            </div>
          )
        })}
        <div className="wf-row wf-total">
          <span className="wf-label">H2 合计</span>
          <span className="wf-track" />
          <span className="wf-value">{fmt(summary.tiers[tier])}</span>
          <span className="wf-conf" />
        </div>
      </div>

      {drawer && summary.provenance[drawer] && (
        <div className="prov-drawer">
          <h3>
            {drawer} · 取数
            <button onClick={() => setDrawer(null)}>×</button>
          </h3>
          <p className="prov-formula">{summary.provenance[drawer].formula}</p>
          <ol>
            {summary.provenance[drawer].steps.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ol>
          <p className="prov-source">来源：{summary.provenance[drawer].source}</p>
          <p className="prov-note">{summary.provenance[drawer].note}</p>
        </div>
      )}

      <h3 className="pet-h3">逐月（H1 实际 + H2 {TIER_LABELS[tier]}档预测）</h3>
      <table className="pet-table">
        <thead>
          <tr>
            <th></th>
            {[1, 2, 3, 4, 5, 6].map((m) => (
              <th key={m} className="h1-col">
                {m}月
              </th>
            ))}
            {[7, 8, 9, 10, 11, 12].map((m) => (
              <th key={m}>{m}月</th>
            ))}
            <th>全年</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>净营收</td>
            {[1, 2, 3, 4, 5, 6].map((m) => (
              <td key={m} className="h1-col">
                {fmt(summary.h1_actual.monthly[m])}
              </td>
            ))}
            {[7, 8, 9, 10, 11, 12].map((m) => (
              <td key={m}>{fmt(summary.monthly[tier][m])}</td>
            ))}
            <td>
              <b>{fmt(summary.tiers_fy[tier])}</b>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
