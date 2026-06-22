import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../utils/api'
import { ForecastVersion, STATUS_LABELS } from '../types'
import { useAuthStore } from '../store/auth'
import { Plus, FolderOpen } from 'lucide-react'
import toast from 'react-hot-toast'

export default function VersionsPage() {
  const [versions, setVersions] = useState<ForecastVersion[]>([])
  const [showModal, setShowModal] = useState(false)
  const [form, setForm] = useState({ name: '', period: '2026H2' })
  const { user } = useAuthStore()
  const navigate = useNavigate()

  const load = () => api.get('/versions').then(r => setVersions(r.data))
  useEffect(() => { load() }, [])

  const create = async (e: React.FormEvent) => {
    e.preventDefault()
    await api.post('/versions', form)
    toast.success('版本已创建')
    setShowModal(false)
    setForm({ name: '', period: '2026H2' })
    load()
  }

  const canCreate = user?.role === 'FINANCE' || user?.role === 'ADMIN'

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1>预测版本管理</h1>
        {canCreate && (
          <button onClick={() => setShowModal(true)} className="btn-primary flex items-center gap-2">
            <Plus className="w-4 h-4" />
            新建版本
          </button>
        )}
      </div>

      <div className="grid gap-4">
        {versions.map(v => (
          <div key={v.id} className="card flex items-center justify-between hover:border-primary-200 cursor-pointer transition-colors" onClick={() => navigate(`/versions/${v.id}`)}>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center">
                <FolderOpen className="w-5 h-5 text-primary-600" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">{v.name}</div>
                <div className="text-sm text-gray-500">周期: {v.period} · 创建人: {v.createdBy.name}</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className={`badge badge-${v.status.toLowerCase().replace(/_/g, '-')}`}>{STATUS_LABELS[v.status]}</span>
              <span className="text-sm text-gray-400">{new Date(v.updatedAt).toLocaleDateString('zh-CN')}</span>
              <span className="text-primary-600 text-sm font-medium">→</span>
            </div>
          </div>
        ))}
        {versions.length === 0 && (
          <div className="text-center py-16 text-gray-400">
            <FolderOpen className="w-12 h-12 mx-auto mb-3 opacity-30" />
            <p>暂无预测版本</p>
          </div>
        )}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <h2 className="mb-4">新建预测版本</h2>
            <form onSubmit={create} className="space-y-4">
              <div>
                <label className="label">版本名称</label>
                <input className="input" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} placeholder="例：2026年下半年FC6+6" required />
              </div>
              <div>
                <label className="label">预测周期</label>
                <select className="input" value={form.period} onChange={e => setForm(f => ({ ...f, period: e.target.value }))}>
                  {['2026H1', '2026H2', '2027H1', '2027H2'].map(p => <option key={p} value={p}>{p}</option>)}
                </select>
              </div>
              <div className="flex gap-3 pt-2">
                <button type="submit" className="btn-primary flex-1">创建</button>
                <button type="button" onClick={() => setShowModal(false)} className="btn-secondary flex-1">取消</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
