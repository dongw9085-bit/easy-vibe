import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../store/auth'
import { BarChart3 } from 'lucide-react'
import toast from 'react-hot-toast'

const DEMO_USERS = [
  { email: 'finance@tcss.com', password: 'demo', label: '财务（复核权限）' },
  { email: 'business@tcss.com', password: 'demo', label: '业务（录入权限）' },
  { email: 'ceo@tcss.com', password: 'demo', label: 'CEO（审批权限）' },
  { email: 'admin@tcss.com', password: 'demo', label: '管理员（全权）' },
]

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const { login } = useAuthStore()
  const navigate = useNavigate()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      await login(email, password)
      navigate('/dashboard')
    } catch {
      toast.error('登录失败，请检查账号密码')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-900 to-primary-700 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-lg mb-4">
            <BarChart3 className="w-9 h-9 text-primary-600" />
          </div>
          <h1 className="text-2xl font-bold text-white">FC6+6 TCSS</h1>
          <p className="text-primary-200 mt-1">全公司预测支持系统</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="label">邮箱账号</label>
              <input type="email" className="input" value={email} onChange={e => setEmail(e.target.value)} placeholder="输入邮箱" required />
            </div>
            <div>
              <label className="label">密码</label>
              <input type="password" className="input" value={password} onChange={e => setPassword(e.target.value)} placeholder="输入密码" required />
            </div>
            <button type="submit" disabled={loading} className="btn-primary w-full py-2.5">
              {loading ? '登录中...' : '登录'}
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-xs text-gray-500 mb-3 font-medium">演示账号（点击快速填充）：</p>
            <div className="space-y-2">
              {DEMO_USERS.map(u => (
                <button
                  key={u.email}
                  onClick={() => { setEmail(u.email); setPassword(u.password) }}
                  className="w-full text-left px-3 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  <div className="text-xs font-medium text-gray-700">{u.label}</div>
                  <div className="text-xs text-gray-400">{u.email}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
