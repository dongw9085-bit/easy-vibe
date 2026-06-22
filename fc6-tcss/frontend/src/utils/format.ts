export const fmtMoney = (v: number, unit = '万元') =>
  `${(v / 10000).toLocaleString('zh-CN', { minimumFractionDigits: 1, maximumFractionDigits: 1 })} ${unit}`

export const fmtPct = (v: number) => `${v.toFixed(1)}%`

export const fmtNum = (v: number) => v.toLocaleString('zh-CN')

export const MONTHS = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
