import React, { useEffect, useState } from 'react'
import { fmt, getMatrix, TIER_LABELS } from '../api.js'
import TierPicker from './TierPicker.jsx'

/* 省份 × 产品线交叉表：每格 H1 实际 + 当前档 H2 预测，点省份展开逐月。 */

export default function PetMatrix({ tier, onTier, reloadKey }) {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [open, setOpen] = useState(null)

  useEffect(() => {
    getMatrix().then(setData).catch((e) => setError(String(e)))
  }, [reloadKey])

  if (error) return <div className="pet-error">加载失败：{error}</div>
  if (!data) return <div className="pet-loading">加载中…</div>

  const totals = {}
  for (const row of data.rows) {
    for (const [line, c] of Object.entries(row.cells)) {
      totals[line] = totals[line] || { h1: 0, h2: 0 }
      totals[line].h1 += c.actual_h1
      totals[line].h2 += c.tiers_h2[tier]
    }
  }

  return (
    <div>
      <div className="pet-toolbar">
        <TierPicker tier={tier} onTier={onTier} />
        <span className="pet-hint">
          每格：H1 实际 / H2 {TIER_LABELS[tier]}档 · 权重窗口 {data.used?.join('、')} · 点击省份展开逐月
        </span>
      </div>
      <table className="pet-table pet-matrix">
        <thead>
          <tr>
            <th>省份</th>
            {data.lines.map((l) => (
              <th key={l}>{l}</th>
            ))}
            <th>全年合计</th>
          </tr>
        </thead>
        <tbody>
          {data.rows.map((row) => (
            <React.Fragment key={row.province}>
              <tr className="matrix-row" onClick={() => setOpen(open === row.province ? null : row.province)}>
                <td className="prov-name">{row.province}</td>
                {data.lines.map((l) => {
                  const c = row.cells[l]
                  return (
                    <td key={l}>
                      {c ? (
                        <>
                          <span className="cell-h1">{fmt(c.actual_h1)}</span>
                          <span className="cell-sep"> / </span>
                          <span className="cell-h2">{fmt(c.tiers_h2[tier])}</span>
                        </>
                      ) : (
                        '—'
                      )}
                    </td>
                  )
                })}
                <td>
                  <b>{fmt(row.l12_total[tier])}</b>
                </td>
              </tr>
              {open === row.province &&
                data.lines
                  .filter((l) => row.cells[l])
                  .map((l) => (
                    <tr key={l} className="matrix-detail">
                      <td>└ {l} 逐月</td>
                      <td colSpan={data.lines.length + 1}>
                        {data.months_h1.map((m, i) => (
                          <span key={m} className="mo mo-h1">
                            {m}月 {fmt(row.cells[l].actual_h1_m[i])}
                          </span>
                        ))}
                        {data.months_h2.map((m, i) => (
                          <span key={m} className="mo">
                            {m}月 {fmt(row.cells[l].h2_m[tier][i])}
                          </span>
                        ))}
                      </td>
                    </tr>
                  ))}
            </React.Fragment>
          ))}
          <tr className="matrix-total">
            <td>合计</td>
            {data.lines.map((l) => (
              <td key={l}>
                {totals[l] ? (
                  <>
                    <span className="cell-h1">{fmt(totals[l].h1)}</span>
                    <span className="cell-sep"> / </span>
                    <span className="cell-h2">{fmt(totals[l].h2)}</span>
                  </>
                ) : (
                  '—'
                )}
              </td>
            ))}
            <td>
              <b>
                {fmt(
                  Object.values(totals).reduce((a, t) => a + t.h1 + t.h2, 0)
                )}
              </b>
            </td>
          </tr>
        </tbody>
      </table>
      <p className="pet-hint">H1 合计应等于 DW 真实开票 {fmt(data.dw_total)} 万（拆维度恒等式门禁）。</p>
    </div>
  )
}
