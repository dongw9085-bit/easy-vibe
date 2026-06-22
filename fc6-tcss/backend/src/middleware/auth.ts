import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import { PrismaClient, Role } from '@prisma/client'

const prisma = new PrismaClient()

export interface AuthRequest extends Request {
  user?: { id: string; role: Role; email: string }
}

export const authenticate = async (req: AuthRequest, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1]
  if (!token) return res.status(401).json({ error: 'No token provided' })
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET || 'secret') as any
    req.user = { id: payload.id, role: payload.role, email: payload.email }
    next()
  } catch {
    return res.status(401).json({ error: 'Invalid token' })
  }
}

export const authorize = (...roles: Role[]) =>
  (req: AuthRequest, res: Response, next: NextFunction) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return res.status(403).json({ error: 'Insufficient permissions' })
    }
    next()
  }

export const checkVersionAccess = async (req: AuthRequest, res: Response, next: NextFunction) => {
  const versionId = req.params.versionId || req.body.versionId
  if (!versionId) return next()
  const version = await prisma.forecastVersion.findUnique({ where: { id: versionId } })
  if (!version) return res.status(404).json({ error: 'Version not found' })
  if (version.status === 'LOCKED' && req.user?.role !== 'ADMIN') {
    if (['POST', 'PUT', 'PATCH', 'DELETE'].includes(req.method)) {
      return res.status(403).json({ error: 'Version is locked' })
    }
  }
  next()
}
