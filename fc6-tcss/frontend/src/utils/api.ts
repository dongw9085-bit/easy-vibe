import axios from 'axios'
import toast from 'react-hot-toast'

const api = axios.create({ baseURL: '/api' })

api.interceptors.response.use(
  (res) => res,
  (err) => {
    const msg = err.response?.data?.error || '请求失败'
    toast.error(msg)
    return Promise.reject(err)
  }
)

export default api
