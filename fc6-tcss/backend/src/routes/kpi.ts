import { Router } from 'express'
import { PrismaClient } from '@prisma/client'
import { authenticate, authorize } from '../middleware/auth'

const router = Router()
const prisma = new PrismaClient()

router.get('/', authenticate, async (req, res) => {
  const { bu, year } = req.query
  const benchmarks = await prisma.kPIBenchmark.findMany({
    where: { ...(bu && { bu: bu as any }), ...(year && { year: Number(year) }) }
  })
  res.json(benchmarks)
})

router.post('/', authenticate, authorize('FINANCE', 'ADMIN'), async (req, res) => {
  const bm = await prisma.kPIBenchmark.create({ data: req.body })
  res.status(201).json(bm)
})

router.put('/:id', authenticate, authorize('FINANCE', 'ADMIN'), async (req, res) => {
  const bm = await prisma.kPIBenchmark.update({ where: { id: req.params.id }, data: req.body })
  res.json(bm)
})

export default router
