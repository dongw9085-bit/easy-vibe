import { Router } from 'express'
import multer from 'multer'
import * as XLSX from 'xlsx'
import { PrismaClient } from '@prisma/client'
import { authenticate, authorize, AuthRequest } from '../middleware/auth'

const router = Router()
const prisma = new PrismaClient()
const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 50 * 1024 * 1024 } })

// POST /api/import/revenue/:versionId
router.post('/revenue/:versionId', authenticate, authorize('FINANCE', 'ADMIN'), upload.single('file'), async (req: AuthRequest, res) => {
  if (!req.file) return res.status(400).json({ error: 'No file uploaded' })
  const { versionId } = req.params

  const wb = XLSX.read(req.file.buffer, { type: 'buffer' })
  const ws = wb.Sheets[wb.SheetNames[0]]
  const rows: any[] = XLSX.utils.sheet_to_json(ws)

  const records = rows.map(row => ({
    versionId,
    bu: row['BU'] || row['bu'],
    productLine: row['产品线'] || row['productLine'],
    sku: row['SKU'] || row['sku'] || null,
    month: Number(row['月份'] || row['month']),
    year: Number(row['年份'] || row['year']),
    isActual: row['类型'] === 'YTD实际' || row['isActual'] === true,
    baselineVolume: row['基础销量'] ? Number(row['基础销量']) : null,
    incrementVolume: row['增长销量'] ? Number(row['增长销量']) : null,
    unitPrice: row['单价'] ? Number(row['单价']) : null,
    baselineRevenue: row['基础收入'] ? Number(row['基础收入']) : null,
    growthRevenue: row['增长收入'] ? Number(row['增长收入']) : null,
    grossMarginPct: row['毛利率'] ? Number(row['毛利率']) : null,
    dso: row['DSO天数'] ? Number(row['DSO天数']) : null
  }))

  await prisma.revenueRecord.createMany({ data: records, skipDuplicates: false })
  await prisma.auditLog.create({
    data: {
      versionId,
      userId: req.user!.id,
      action: 'IMPORT',
      tableName: 'RevenueRecord',
      recordId: versionId,
      newValues: { count: records.length, filename: req.file.originalname }
    }
  })

  res.json({ imported: records.length, filename: req.file.originalname })
})

// POST /api/import/template/download — returns blank Excel template
router.get('/template/revenue', authenticate, (_req, res) => {
  const wb = XLSX.utils.book_new()
  const headers = ['BU', '产品线', 'SKU', '月份', '年份', '类型', '基础销量', '增长销量', '单价', '基础收入', '增长收入', '毛利率', 'DSO天数']
  const ws = XLSX.utils.aoa_to_sheet([headers])
  XLSX.utils.book_append_sheet(wb, ws, '收入预测模板')
  const buf = XLSX.write(wb, { type: 'buffer', bookType: 'xlsx' })
  res.setHeader('Content-Disposition', 'attachment; filename=revenue_template.xlsx')
  res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
  res.send(buf)
})

export default router
