import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuthStore } from './store/auth'
import LoginPage from './pages/LoginPage'
import Layout from './components/Layout'
import DashboardPage from './pages/DashboardPage'
import VersionsPage from './pages/VersionsPage'
import VersionDetailPage from './pages/VersionDetailPage'
import RevenuePage from './pages/RevenuePage'
import ExpensesPage from './pages/ExpensesPage'
import HCPage from './pages/HCPage'
import CapexPage from './pages/CapexPage'
import ProductionPage from './pages/ProductionPage'
import ReportsPage from './pages/ReportsPage'
import KPIPage from './pages/KPIPage'

function RequireAuth({ children }: { children: React.ReactNode }) {
  const user = useAuthStore(s => s.user)
  return user ? <>{children}</> : <Navigate to="/login" replace />
}

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<RequireAuth><Layout /></RequireAuth>}>
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="versions" element={<VersionsPage />} />
        <Route path="versions/:id" element={<VersionDetailPage />} />
        <Route path="versions/:id/revenue" element={<RevenuePage />} />
        <Route path="versions/:id/expenses" element={<ExpensesPage />} />
        <Route path="versions/:id/hc" element={<HCPage />} />
        <Route path="versions/:id/capex" element={<CapexPage />} />
        <Route path="versions/:id/production" element={<ProductionPage />} />
        <Route path="versions/:id/reports" element={<ReportsPage />} />
        <Route path="kpi" element={<KPIPage />} />
      </Route>
    </Routes>
  )
}
