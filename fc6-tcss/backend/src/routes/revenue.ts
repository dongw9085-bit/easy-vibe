import { Router } from 'express'
import { PrismaClient } from '@prisma/client'
import { authenticate, checkVersionAccess, AuthRequest } from '../middleware/auth'

const router = Router()
const prisma = new PrismaClient()

// GET /api/revenue?versionId=&bu=&year=
router.get('/', authenticate, async (req, res) => {
  const { versionId, bu, year } = req.query
  const records = await prisma.revenueRecord.findMany({
    where: {
      ...(versionId && { versionId: versionId as string }),
      ...(bu && { bu: bu as any }),
      ...(year && { year: Number(year) })
    },
    orderBy: [{ bu: 'asc' }, { month: 'asc' }]
  })
  res.json(records)
})

// POST /api/revenue
router.post('/', authenticate, checkVersionAccess, async (req: AuthRequest, res) => {
  const data = req.body
  const record = await prisma.revenueRecord.create({ data })
  await prisma.auditLog.create({
    data: {
      versionId: data.versionId,
      userId: req.user!.id,
      action: 'CREATE',
      tableName: 'RevenueRecord',
      recordId: record.id,
      newValues: data
    }
  })
  res.status(201).json(record)
})

// PUT /api/revenue/:id
router.put('/:id', authenticate, async (req: AuthRequest, res) => {
  const old = await prisma.revenueRecord.findUnique({ where: { id: req.params.id } })
  const record = await prisma.revenueRecord.update({ where: { id: req.params.id }, data: req.body })
  await prisma.auditLog.create({
    data: {
      versionId: record.versionId,
      userId: req.user!.id,
      action: 'UPDATE',
      tableName: 'RevenueRecord',
      recordId: record.id,
      oldValues: old as any,
      newValues: req.body
    }
  })
  res.json(record)
})

// DELETE /api/revenue/:id
router.delete('/:id', authenticate, async (req: AuthRequest, res) => {
  const record = await prisma.revenueRecord.delete({ where: { id: req.params.id } })
  res.json({ deleted: record.id })
})

// GET /api/revenue/monthly-summary?versionId=&bu=
router.get('/monthly-summary', authenticate, async (req, res) => {
  const { versionId, bu } = req.query
  const rows = await prisma.revenueRecord.groupBy({
    by: ['month', 'year', 'isActual'],
    where: {
      versionId: versionId as string,
      ...(bu && { bu: bu as any })
    },
    _sum: { baselineRevenue: true, growthRevenue: true, grossMarginPct: true }
  })
  res.json(rows)
})

export default router
