import { Router } from 'express'
import { PrismaClient, ApprovalStatus } from '@prisma/client'
import { authenticate, authorize, AuthRequest } from '../middleware/auth'

const router = Router()
const prisma = new PrismaClient()

const transitions: Record<string, { from: ApprovalStatus; to: ApprovalStatus; roles: string[] }> = {
  SUBMIT: { from: 'DRAFT', to: 'SUBMITTED', roles: ['BUSINESS', 'FINANCE', 'ADMIN'] },
  FINANCE_REVIEW: { from: 'SUBMITTED', to: 'FINANCE_REVIEWED', roles: ['FINANCE', 'ADMIN'] },
  CEO_APPROVE: { from: 'FINANCE_REVIEWED', to: 'CEO_APPROVED', roles: ['CEO', 'ADMIN'] },
  LOCK: { from: 'CEO_APPROVED', to: 'LOCKED', roles: ['ADMIN', 'CEO'] },
  REJECT: { from: 'SUBMITTED', to: 'DRAFT', roles: ['FINANCE', 'CEO', 'ADMIN'] }
}

// POST /api/approvals/:versionId/action
router.post('/:versionId/action', authenticate, async (req: AuthRequest, res) => {
  const { versionId } = req.params
  const { action, comment } = req.body
  const transition = transitions[action]
  if (!transition) return res.status(400).json({ error: 'Invalid action' })
  if (!transition.roles.includes(req.user!.role)) {
    return res.status(403).json({ error: 'Not authorized for this action' })
  }
  const version = await prisma.forecastVersion.findUnique({ where: { id: versionId } })
  if (!version) return res.status(404).json({ error: 'Version not found' })
  if (version.status !== transition.from) {
    return res.status(400).json({ error: `Version must be in ${transition.from} status` })
  }
  const [updated] = await prisma.$transaction([
    prisma.forecastVersion.update({
      where: { id: versionId },
      data: {
        status: transition.to,
        ...(transition.to === 'LOCKED' && { lockedAt: new Date() })
      }
    }),
    prisma.approvalRecord.create({
      data: { versionId, approverId: req.user!.id, action, comment }
    }),
    prisma.auditLog.create({
      data: {
        versionId,
        userId: req.user!.id,
        action: `APPROVAL_${action}`,
        tableName: 'ForecastVersion',
        recordId: versionId,
        oldValues: { status: version.status },
        newValues: { status: transition.to }
      }
    })
  ])
  res.json(updated)
})

// GET /api/approvals/:versionId/history
router.get('/:versionId/history', authenticate, async (req, res) => {
  const records = await prisma.approvalRecord.findMany({
    where: { versionId: req.params.versionId },
    include: { approver: { select: { name: true, role: true } } },
    orderBy: { createdAt: 'asc' }
  })
  res.json(records)
})

export default router
