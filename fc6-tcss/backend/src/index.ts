import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import authRoutes from './routes/auth'
import versionRoutes from './routes/versions'
import revenueRoutes from './routes/revenue'
import expenseRoutes from './routes/expenses'
import hcRoutes from './routes/hc'
import capexRoutes from './routes/capex'
import productionRoutes from './routes/production'
import kpiRoutes from './routes/kpi'
import approvalRoutes from './routes/approvals'
import reportRoutes from './routes/reports'
import importRoutes from './routes/import'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors({ origin: process.env.FRONTEND_URL || 'http://localhost:5173' }))
app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ extended: true }))

app.use('/api/auth', authRoutes)
app.use('/api/versions', versionRoutes)
app.use('/api/revenue', revenueRoutes)
app.use('/api/expenses', expenseRoutes)
app.use('/api/hc', hcRoutes)
app.use('/api/capex', capexRoutes)
app.use('/api/production', productionRoutes)
app.use('/api/kpi', kpiRoutes)
app.use('/api/approvals', approvalRoutes)
app.use('/api/reports', reportRoutes)
app.use('/api/import', importRoutes)

app.get('/api/health', (_req, res) => res.json({ status: 'ok', ts: new Date() }))

app.listen(PORT, () => console.log(`FC6 TCSS API running on :${PORT}`))
export default app
