import { Router } from 'express'
import { PrismaClient } from '@prisma/client'
import { authenticate, authorize } from '../middleware/auth'
import { kpiService } from '../services/kpiService'

const router = Router()
const prisma = new PrismaClient()

// GET /api/kpi?bu=&year=
router.get('/', authenticate, async (req, res) => {
  const { bu, year } = req.query
  const benchmarks = await prisma.kPIBenchmark.findMany({
    where: { ...(bu && { bu: bu as any }), ...(year && { year: Number(year) }) },
    orderBy: [{ bu: 'asc' }, { kpiCode: 'asc' }]
  })
  res.json(benchmarks)
})

// POST /api/kpi
router.post('/', authenticate, authorize('FINANCE', 'ADMIN'), async (req, res) => {
  const bm = await prisma.kPIBenchmark.create({ data: req.body })
  res.status(201).json(bm)
})

// PUT /api/kpi/:id
router.put('/:id', authenticate, authorize('FINANCE', 'ADMIN'), async (req, res) => {
  const bm = await prisma.kPIBenchmark.update({ where: { id: req.params.id }, data: req.body })
  res.json(bm)
})

// GET /api/kpi/alerts/:versionId — KPI 预警列表
router.get('/alerts/:versionId', authenticate, async (req, res) => {
  const alerts = await kpiService.batchCheckVersion(req.params.versionId)
  res.json(alerts)
})

// GET /api/kpi/report/:versionId — 完整预警报告（含 AI 建议）
router.get('/report/:versionId', authenticate, async (req, res) => {
  const report = await kpiService.generateAlertReport(req.params.versionId)
  res.json(report)
})

export default router
