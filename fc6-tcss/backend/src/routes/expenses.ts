import { Router } from 'express'
import { PrismaClient } from '@prisma/client'
import { authenticate, checkVersionAccess, AuthRequest } from '../middleware/auth'

const router = Router()
const prisma = new PrismaClient()

router.get('/', authenticate, async (req, res) => {
  const { versionId, bu } = req.query
  const records = await prisma.expenseRecord.findMany({
    where: {
      ...(versionId && { versionId: versionId as string }),
      ...(bu && { bu: bu as any })
    },
    orderBy: [{ bu: 'asc' }, { month: 'asc' }]
  })
  res.json(records)
})

router.post('/', authenticate, checkVersionAccess, async (req: AuthRequest, res) => {
  const record = await prisma.expenseRecord.create({ data: req.body })
  await prisma.auditLog.create({
    data: { versionId: req.body.versionId, userId: req.user!.id, action: 'CREATE', tableName: 'ExpenseRecord', recordId: record.id, newValues: req.body }
  })
  res.status(201).json(record)
})

router.put('/:id', authenticate, async (req: AuthRequest, res) => {
  const record = await prisma.expenseRecord.update({ where: { id: req.params.id }, data: req.body })
  res.json(record)
})

router.delete('/:id', authenticate, async (_req, res) => {
  await prisma.expenseRecord.delete({ where: { id: _req.params.id } })
  res.json({ deleted: _req.params.id })
})

export default router
