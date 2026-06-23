/**
 * M2 预测引擎 API 路由
 */
import { Router } from 'express'
import { authenticate } from '../middleware/auth'
import { marketEngine, hcEngine, costReductionEngine } from '../services/forecastEngine'
import { BusinessUnit } from '@prisma/client'

const router = Router()

// GET /api/forecast/revenue/:versionId?bu=
router.get('/revenue/:versionId', authenticate, async (req, res) => {
  const { versionId } = req.params
  const bu = req.query.bu as BusinessUnit | undefined

  if (bu) {
    const result = await marketEngine.mergeAndOutput(versionId, bu)
    return res.json(result)
  }

  // 返回所有 BU
  const BUS = Object.values(BusinessUnit).filter(b => b !== 'OPERATIONS' && b !== 'RD')
  const results = await Promise.all(BUS.map(b => marketEngine.mergeAndOutput(versionId, b)))
  res.json(results.filter(Boolean))
})

// GET /api/forecast/ebit/:versionId?bu=
router.get('/ebit/:versionId', authenticate, async (req, res) => {
  const { versionId } = req.params
  const bu = req.query.bu as BusinessUnit | undefined

  if (bu) {
    const result = await marketEngine.calculateBUEBIT(versionId, bu)
    return res.json(result)
  }

  const BUS = Object.values(BusinessUnit)
  const results = await Promise.all(BUS.map(b => marketEngine.calculateBUEBIT(versionId, b)))
  res.json(results)
})

// GET /api/forecast/hc/:versionId?bu=&month=
router.get('/hc/:versionId', authenticate, async (req, res) => {
  const { versionId } = req.params
  const bu = req.query.bu as BusinessUnit
  const month = parseInt(req.query.month as string) || 7

  if (!bu) return res.status(400).json({ error: 'bu 参数必填' })

  const result = await hcEngine.calculateMonthlyCB(versionId, bu, month)
  res.json(result)
})

// GET /api/forecast/hc/per-head/:versionId?bu=
router.get('/hc/per-head/:versionId', authenticate, async (req, res) => {
  const { versionId } = req.params
  const bu = req.query.bu as BusinessUnit

  if (!bu) return res.status(400).json({ error: 'bu 参数必填' })

  const result = await hcEngine.calculatePerHeadRevenue(versionId, bu)
  res.json(result)
})

// GET /api/forecast/cost-reduction/:versionId
router.get('/cost-reduction/:versionId', authenticate, async (req, res) => {
  const { versionId } = req.params
  const result = await costReductionEngine.calculateNetSaving(versionId)
  res.json(result)
})

export default router
