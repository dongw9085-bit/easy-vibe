import React, { useEffect, useState } from 'react'
import { getParams, putParam } from '../api.js'

/* 参数面板：业务可改，改完即时重算（后端无缓存）。note 含"弃用"的参数隐藏。 */

export default function PetParamsPanel({ onChanged }) {
  const [params, setParams] = useState([])
  const [draft, setDraft] = useState({})
  const [saving, setSaving] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    getParams()
      .then((ps) => setParams(ps.filter((p) => !(p.note || '').includes('弃用'))))
      .catch((e) => setError(String(e)))
  }, [])

  const save = async (key) => {
    const value = draft[key]
    if (value == null || value === '') return
    setSaving(key)
    try {
      await putParam(key, value)
      setParams((ps) => ps.map((p) => (p.key === key ? { ...p, value: String(value) } : p)))
      setDraft((d) => ({ ...d, [key]: undefined }))
      onChanged?.()
    } catch (e) {
      setError(String(e))
    } finally {
      setSaving(null)
    }
  }

  const groups = [...new Set(params.map((p) => p.group))]

  return (
    <div className="params-panel">
      <h3>参数面板</h3>
      {error && <div className="pet-error">{error}</div>}
      {groups.map((g) => (
        <div key={g} className="params-group">
          <h4>{g}</h4>
          {params
            .filter((p) => p.group === g)
            .map((p) => (
              <div key={p.key} className="param-row" title={p.note || ''}>
                <label>
                  {p.label}
                  {p.unit ? `（${p.unit}）` : ''}
                </label>
                <input
                  value={draft[p.key] ?? p.value}
                  onChange={(e) => setDraft((d) => ({ ...d, [p.key]: e.target.value }))}
                  onKeyDown={(e) => e.key === 'Enter' && save(p.key)}
                />
                <button disabled={saving === p.key || draft[p.key] == null} onClick={() => save(p.key)}>
                  {saving === p.key ? '…' : '保存'}
                </button>
              </div>
            ))}
        </div>
      ))}
    </div>
  )
}
