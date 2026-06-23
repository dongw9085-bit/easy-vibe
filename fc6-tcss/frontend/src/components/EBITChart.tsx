/**
 * EBIT 多维图表组件 — 柱状对比 + 雷达图
 */
import ReactECharts from 'echarts-for-react'
import { useEffect, useState } from 'react'
import { svc } from '../utils/service'

const BU_LABELS: Record<string, string> = {
  DOMESTIC_MEDICAL: '国内人医',
  ECOMMERCE:        '电商',
  INTL_PUBLIC:      '国际公卫',
  INTL_PRIVATE:     '国际非公卫',
  PET:              '宠物',
}

interface Props {
  versionId: string
  chartType?: 'bar' | 'radar' | 'trend'
}

export function EBITChart({ versionId, chartType = 'bar' }: Props) {
  const [data, setData] = useState<any>(null)

  useEffect(() => {
    svc.getEBIT(versionId).then(setData)
  }, [versionId])

  if (!data) return <div className="flex items-center justify-center h-48 text-gray-500 text-sm">加载中...</div>

  const buData = (data.byBU || []).map((b: any) => ({
    ...b,
    label: BU_LABELS[b.bu] || b.bu
  }))

  if (chartType === 'bar') {
    return (
      <ReactECharts
        style={{ height: '260px' }}
        option={{
          tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
          legend: { data: ['收入', '毛利润', '费用', 'EBIT'], textStyle: { color: '#8b949e' } },
          grid: { left: 40, right: 20, top: 40, bottom: 30 },
          xAxis: {
            type: 'category',
            data: buData.map((b: any) => b.label),
            axisLabel: { color: '#8b949e', fontSize: 11 },
            axisLine: { lineStyle: { color: '#30363d' } },
          },
          yAxis: {
            type: 'value', name: '万元',
            nameTextStyle: { color: '#8b949e' },
            axisLabel: { color: '#8b949e', fontSize: 11 },
            splitLine: { lineStyle: { color: '#30363d' } },
          },
          series: [
            { name: '收入',  type: 'bar', data: buData.map((b: any) => Math.round(b.revenue / 10000)),     itemStyle: { color: '#58a6ff88', borderRadius: [3,3,0,0] } },
            { name: '毛利润',type: 'bar', data: buData.map((b: any) => Math.round(b.grossProfit / 10000)), itemStyle: { color: '#1f6feb88', borderRadius: [3,3,0,0] } },
            { name: '费用',  type: 'bar', data: buData.map((b: any) => Math.round(b.expense / 10000)),     itemStyle: { color: '#ff7b7288', borderRadius: [3,3,0,0] } },
            { name: 'EBIT',  type: 'bar', data: buData.map((b: any) => Math.round(b.ebit / 10000)),        itemStyle: { color: '#3fb95099', borderRadius: [3,3,0,0] } },
          ]
        }}
      />
    )
  }

  if (chartType === 'radar') {
    return (
      <ReactECharts
        style={{ height: '260px' }}
        option={{
          legend: { data: ['实际毛利率', 'KPI基准'], textStyle: { color: '#8b949e' } },
          radar: {
            indicator: buData.map((b: any) => ({ name: b.label, max: 100 })),
            splitLine: { lineStyle: { color: '#30363d' } },
            axisLine: { lineStyle: { color: '#30363d' } },
            name: { textStyle: { color: '#8b949e', fontSize: 11 } },
          },
          series: [{
            type: 'radar',
            data: [
              {
                name: '实际毛利率',
                value: buData.map((b: any) => Math.round(b.grossMargin * 100)),
                areaStyle: { color: '#58a6ff22' },
                lineStyle: { color: '#58a6ff' },
                itemStyle: { color: '#58a6ff' },
              },
              {
                name: 'KPI基准',
                value: [62, 70, 58, 60, 65].slice(0, buData.length),
                areaStyle: { color: '#3fb95011' },
                lineStyle: { color: '#3fb950', type: 'dashed' },
                itemStyle: { color: '#3fb950' },
              }
            ]
          }]
        }}
      />
    )
  }

  // Trend
  const months = ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
  const ytd = [2800,2950,3100,3050,3200,3350,null,null,null,null,null,null]
  const fc  = [null,null,null,null,null,null,3420,3580,3650,3700,3820,3900]

  return (
    <ReactECharts
      style={{ height: '260px' }}
      option={{
        tooltip: { trigger: 'axis' },
        legend: { data: ['YTD实际', 'FC预测'], textStyle: { color: '#8b949e' } },
        grid: { left: 40, right: 20, top: 40, bottom: 30 },
        xAxis: {
          type: 'category', data: months,
          axisLabel: { color: '#8b949e', fontSize: 11 },
          axisLine: { lineStyle: { color: '#30363d' } },
        },
        yAxis: {
          type: 'value', name: '万元',
          nameTextStyle: { color: '#8b949e' },
          axisLabel: { color: '#8b949e', fontSize: 11 },
          splitLine: { lineStyle: { color: '#30363d' } },
        },
        series: [
          {
            name: 'YTD实际', type: 'line', data: ytd,
            lineStyle: { color: '#58a6ff', width: 2 },
            itemStyle: { color: '#58a6ff' },
            areaStyle: { color: '#58a6ff11' },
            connectNulls: false,
          },
          {
            name: 'FC预测', type: 'line', data: fc,
            lineStyle: { color: '#3fb950', width: 2, type: 'dashed' },
            itemStyle: { color: '#3fb950' },
            areaStyle: { color: '#3fb95011' },
            connectNulls: false,
          },
        ]
      }}
    />
  )
}
