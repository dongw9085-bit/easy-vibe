import React, { useEffect, useMemo, useState } from 'react'
import { fmt, getMatrix, getSku, TIER_LABELS } from '../api.js'
import TierPicker from './TierPicker.jsx'

/* SKU 明细：按项目分组（换版编码自动合并），1–6 月实际 + 7–12 月当前档预测；可按产品线/省份筛。 */

export default function PetSkuTable({ tier, onTier, reloadKey }) {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [province, setProvince] = useState('')
  const [line, setLine] = useState('')
  const [provinces, setProvinces] = useState([])

  useEffect(() => {
    getMatrix()
      .then((m) => setProvinces(m.rows.map((r) => r.province)))
      .catch(() => {})
  }, [reloadKey])

  useEffect(() => {
    setData(null)
    getSku(province || null, line || null)
      .then(setData)
      .catch((e) => setError(String(e)))
  }, [province, line, reloadKey])

  const totals = useMemo(() => {
    if (!data) return null
    return {
      h1: data.rows.reduce((a, r) => a + r.actual_h1, 0),
      h2: data.rows.reduce((a, r) => a + r.tiers_h2[tier], 0)
    }
  }, [data, tier])

  if (error) return <div className="pet-error">加载失败：{error}</div>

  return (
    <div>
      <div className="pet-toolbar">
        <TierPicker tier={tier} onTier={onTier} />
        <select value={line} onChange={(e) => setLine(e.target.value)}>
          <option value="">全部产品线</option>
          {['F1', 'M4', 'M16', 'A1', 'C1'].map((l) => (
            <option key={l} value={l}>
              {l}
            </option>
          ))}
        </select>
        <select value={province} onChange={(e) => setProvince(e.target.value)}>
          <option value="">全部省份</option>
          {provinces.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </div>
      {!data ? (
        <div className="pet-loading">加载中…</div>
      ) : (
        <table className="pet-table pet-sku">
          <thead>
            <tr>
              <th>项目</th>
              <th>编码</th>
              <th>产品线</th>
              {data.months_h1.map((m) => (
                <th key={m} className="h1-col">
                  {m}月
                </th>
              ))}
              {data.months_h2.map((m) => (
                <th key={m}>{m}月</th>
              ))}
              <th>H2 合计</th>
              <th>全年</th>
            </tr>
          </thead>
          <tbody>
            {data.rows.map((r) => (
              <tr key={r.project}>
                <td className="sku-name">{r.project}</td>
                <td className="sku-codes">{r.codes.join(' / ')}</td>
                <td>{r.device_types.join(' ')}</td>
                {r.actual_h1_m.map((v, i) => (
                  <td key={i} className="h1-col">
                    {fmt(v)}
                  </td>
                ))}
                {r.tiers_m[tier].map((v, i) => (
                  <td key={i}>{fmt(v)}</td>
                ))}
                <td>
                  <b>{fmt(r.tiers_h2[tier])}</b>
                </td>
                <td>{fmt(r.actual_h1 + r.tiers_h2[tier])}</td>
              </tr>
            ))}
            {totals && (
              <tr className="matrix-total">
                <td>合计（{TIER_LABELS[tier]}档）</td>
                <td colSpan={2 + data.months_h1.length + data.months_h2.length}>
                  H1 {fmt(totals.h1)} · H2 {fmt(totals.h2)}
                </td>
                <td>
                  <b>{fmt(totals.h2)}</b>
                </td>
                <td>{fmt(totals.h1 + totals.h2)}</td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  )
}
