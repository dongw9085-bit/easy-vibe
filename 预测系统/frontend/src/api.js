const json = (r) => {
  if (!r.ok) throw new Error(`${r.status} ${r.statusText}`)
  return r.json()
}

export const getParams = () => fetch('/api/pet/params').then(json)
export const putParam = (key, value) =>
  fetch(`/api/pet/params/${encodeURIComponent(key)}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ value: String(value) })
  }).then(json)
export const getSummary = () => fetch('/api/pet/summary').then(json)
export const getMatrix = () => fetch('/api/pet/matrix').then(json)
export const getSku = (province, deviceType) => {
  const q = new URLSearchParams()
  if (province) q.set('province', province)
  if (deviceType) q.set('device_type', deviceType)
  const qs = q.toString()
  return fetch(`/api/pet/sku${qs ? '?' + qs : ''}`).then(json)
}

export const fmt = (v, digits = 2) =>
  v == null ? '—' : Number(v).toLocaleString('zh-CN', { minimumFractionDigits: digits, maximumFractionDigits: digits })

export const TIER_LABELS = { red: '红', yellow: '黄', green: '绿' }
export const TIER_COLORS = { red: '#d5504e', yellow: '#d9a419', green: '#3f9a58' }
