import { Router } from 'express'
import { PrismaClient } from '@prisma/client'
import * as XLSX from 'xlsx'
import { authenticate } from '../middleware/auth'

const router = Router()
const prisma = new PrismaClient()

// GET /api/reports/:versionId/excel — download full FC6+6 report
router.get('/:versionId/excel', authenticate, async (req, res) => {
  const { versionId } = req.params
  const version = await prisma.forecastVersion.findUnique({ where: { id: versionId } })
  if (!version) return res.status(404).json({ error: 'Version not found' })

  const [revenue, expenses, hc, capex] = await Promise.all([
    prisma.revenueRecord.findMany({ where: { versionId }, orderBy: [{ bu: 'asc' }, { month: 'asc' }] }),
    prisma.expenseRecord.findMany({ where: { versionId }, orderBy: [{ bu: 'asc' }, { month: 'asc' }] }),
    prisma.hCPlan.findMany({ where: { versionId }, orderBy: [{ bu: 'asc' }, { month: 'asc' }] }),
    prisma.capexPlan.findMany({ where: { versionId }, orderBy: [{ bu: 'asc' }, { month: 'asc' }] })
  ])

  const wb = XLSX.utils.book_new()

  // Revenue Sheet
  const revData = revenue.map(r => ({
    BU: r.bu, 产品线: r.productLine, SKU: r.sku || '', 月份: r.month, 年份: r.year,
    类型: r.isActual ? 'YTD实际' : 'FC预测',
    基础销量: Number(r.baselineVolume || 0), 增长销量: Number(r.incrementVolume || 0),
    单价: Number(r.unitPrice || 0),
    基础收入: Number(r.baselineRevenue || 0), 增长收入: Number(r.growthRevenue || 0),
    毛利率: Number(r.grossMarginPct || 0), DSO天数: Number(r.dso || 0)
  }))
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(revData), '收入预测')

  // Expense Sheet
  const expData = expenses.map(e => ({
    BU: e.bu, 费用类别: e.category, 子类: e.subcategory || '', 月份: e.month, 年份: e.year,
    类型: e.isActual ? 'YTD实际' : 'FC预测', 金额: Number(e.amount)
  }))
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(expData), '费用预测')

  // HC Sheet
  const hcData = hc.map(h => ({
    BU: h.bu, 部门: h.department, 月份: h.month, 年份: h.year,
    类型: h.isActual ? 'YTD实际' : 'FC预测',
    人数: h.headcount, FTE: Number(h.fte),
    基本薪资: Number(h.baseSalary || 0), 奖金: Number(h.bonus || 0),
    社保: Number(h.socialInsur || 0), CB合计: Number(h.totalCB || 0)
  }))
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(hcData), 'HC人员计划')

  // Capex Sheet
  const capexData = capex.map(c => ({
    BU: c.bu, 项目名称: c.projectName, 类别: c.category,
    月份: c.month, 年份: c.year, 金额: Number(c.amount),
    折旧年限月: c.depreciationLife, 月折旧: Number(c.monthlyDepr || 0),
    效率提升: Number(c.efficiencyGain || 0), ROI: Number(c.roi || 0)
  }))
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(capexData), 'Capex计划')

  const buf = XLSX.write(wb, { type: 'buffer', bookType: 'xlsx' })
  res.setHeader('Content-Disposition', `attachment; filename=FC6_TCSS_${version.period}_${version.name}.xlsx`)
  res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
  res.send(buf)
})

// GET /api/reports/:versionId/ebit  — EBIT by BU
router.get('/:versionId/ebit', authenticate, async (req, res) => {
  const { versionId } = req.params
  const [revByBU, expByBU] = await Promise.all([
    prisma.revenueRecord.groupBy({
      by: ['bu', 'isActual'],
      where: { versionId },
      _sum: { baselineRevenue: true, growthRevenue: true, grossMarginPct: true }
    }),
    prisma.expenseRecord.groupBy({
      by: ['bu', 'isActual'],
      where: { versionId },
      _sum: { amount: true }
    })
  ])

  const ebit = revByBU.map(r => {
    const exp = expByBU.find(e => e.bu === r.bu && e.isActual === r.isActual)
    const revenue = Number(r._sum.baselineRevenue || 0) + Number(r._sum.growthRevenue || 0)
    const grossProfit = revenue * Number(r._sum.grossMarginPct || 0) / 100
    const expenses = Number(exp?._sum.amount || 0)
    return {
      bu: r.bu,
      isActual: r.isActual,
      revenue,
      grossProfit,
      grossMarginPct: Number(r._sum.grossMarginPct || 0),
      expenses,
      ebit: grossProfit - expenses,
      ebitPct: revenue ? ((grossProfit - expenses) / revenue * 100).toFixed(2) : '0'
    }
  })
  res.json(ebit)
})

export default router
