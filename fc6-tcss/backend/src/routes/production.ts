import { Router } from 'express'
import { PrismaClient } from '@prisma/client'
import { authenticate, checkVersionAccess, AuthRequest } from '../middleware/auth'

const router = Router()
const prisma = new PrismaClient()

router.get('/', authenticate, async (req, res) => {
  const { versionId, site } = req.query
  const records = await prisma.productionCost.findMany({
    where: { ...(versionId && { versionId: versionId as string }), ...(site && { site: site as string }) },
    orderBy: [{ site: 'asc' }, { month: 'asc' }]
  })
  res.json(records)
})

router.post('/', authenticate, checkVersionAccess, async (req: AuthRequest, res) => {
  const record = await prisma.productionCost.create({ data: req.body })
  res.status(201).json(record)
})

router.put('/:id', authenticate, async (req, res) => {
  const record = await prisma.productionCost.update({ where: { id: req.params.id }, data: req.body })
  res.json(record)
})

// Summary by site
router.get('/site-summary', authenticate, async (req, res) => {
  const { versionId } = req.query
  const data = await prisma.productionCost.groupBy({
    by: ['site', 'isActual'],
    where: { ...(versionId && { versionId: versionId as string }) },
    _sum: { directMaterial: true, externalMaterial: true, directLabor: true, consumables: true, energy: true, qcCost: true, indirectMfg: true },
    _avg: { yieldRate: true, oee: true, inventoryDays: true }
  })
  res.json(data)
})

export default router
