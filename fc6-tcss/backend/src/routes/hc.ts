import { Router } from 'express'
import { PrismaClient } from '@prisma/client'
import { authenticate, checkVersionAccess, AuthRequest } from '../middleware/auth'

const router = Router()
const prisma = new PrismaClient()

router.get('/', authenticate, async (req, res) => {
  const { versionId, bu } = req.query
  const records = await prisma.hCPlan.findMany({
    where: { ...(versionId && { versionId: versionId as string }), ...(bu && { bu: bu as any }) },
    orderBy: [{ bu: 'asc' }, { month: 'asc' }]
  })
  res.json(records)
})

router.post('/', authenticate, checkVersionAccess, async (req: AuthRequest, res) => {
  const record = await prisma.hCPlan.create({ data: req.body })
  res.status(201).json(record)
})

router.put('/:id', authenticate, async (req, res) => {
  const record = await prisma.hCPlan.update({ where: { id: req.params.id }, data: req.body })
  res.json(record)
})

export default router
