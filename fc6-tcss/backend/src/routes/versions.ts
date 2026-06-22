import { Router } from 'express'
import { PrismaClient } from '@prisma/client'
import { authenticate, authorize, AuthRequest } from '../middleware/auth'

const router = Router()
const prisma = new PrismaClient()

// GET /api/versions
router.get('/', authenticate, async (_req, res) => {
  const versions = await prisma.forecastVersion.findMany({
    include: { createdBy: { select: { name: true, email: true } } },
    orderBy: { createdAt: 'desc' }
  })
  res.json(versions)
})

// POST /api/versions
router.post('/', authenticate, authorize('FINANCE', 'ADMIN'), async (req: AuthRequest, res) => {
  const { name, period } = req.body
  const version = await prisma.forecastVersion.create({
    data: { name, period, createdById: req.user!.id }
  })
  res.status(201).json(version)
})

// GET /api/versions/:id/summary
router.get('/:id/summary', authenticate, async (req, res) => {
  const { id } = req.params
  const [revenue, expenses, hc, capex] = await Promise.all([
    prisma.revenueRecord.aggregate({
      where: { versionId: id, isActual: false },
      _sum: { baselineRevenue: true, growthRevenue: true }
    }),
    prisma.expenseRecord.aggregate({
      where: { versionId: id, isActual: false },
      _sum: { amount: true }
    }),
    prisma.hCPlan.aggregate({
      where: { versionId: id },
      _sum: { fte: true, totalCB: true }
    }),
    prisma.capexPlan.aggregate({
      where: { versionId: id },
      _sum: { amount: true }
    })
  ])
  res.json({
    totalRevenue: Number(revenue._sum.baselineRevenue || 0) + Number(revenue._sum.growthRevenue || 0),
    totalExpenses: Number(expenses._sum.amount || 0),
    totalFTE: Number(hc._sum.fte || 0),
    totalCB: Number(hc._sum.totalCB || 0),
    totalCapex: Number(capex._sum.amount || 0)
  })
})

// GET /api/versions/:id/kpi-alerts
router.get('/:id/kpi-alerts', authenticate, async (req, res) => {
  const { id } = req.params
  const benchmarks = await prisma.kPIBenchmark.findMany()
  const revenueByBU = await prisma.revenueRecord.groupBy({
    by: ['bu'],
    where: { versionId: id, isActual: false },
    _sum: { baselineRevenue: true, growthRevenue: true, grossMarginPct: true }
  })
  const alerts: any[] = []
  for (const bm of benchmarks) {
    const buData = revenueByBU.find(r => r.bu === bm.bu)
    if (!buData) continue
    const value = Number(buData._sum.grossMarginPct || 0)
    if (bm.warnLow && value < Number(bm.warnLow)) {
      alerts.push({ bu: bm.bu, kpi: bm.kpiName, value, threshold: bm.warnLow, type: 'LOW' })
    }
    if (bm.warnHigh && value > Number(bm.warnHigh)) {
      alerts.push({ bu: bm.bu, kpi: bm.kpiName, value, threshold: bm.warnHigh, type: 'HIGH' })
    }
  }
  res.json(alerts)
})

export default router
