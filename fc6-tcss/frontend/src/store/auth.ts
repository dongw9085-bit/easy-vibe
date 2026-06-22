import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { User } from '../types'
import api from '../utils/api'

interface AuthState {
  user: User | null
  token: string | null
  login: (email: string, password: string) => Promise<void>
  logout: () => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      login: async (email, password) => {
        const res = await api.post('/auth/login', { email, password })
        set({ user: res.data.user, token: res.data.token })
        api.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`
      },
      logout: () => {
        set({ user: null, token: null })
        delete api.defaults.headers.common['Authorization']
      }
    }),
    {
      name: 'fc6-auth',
      onRehydrateStorage: () => (state) => {
        if (state?.token) {
          api.defaults.headers.common['Authorization'] = `Bearer ${state.token}`
        }
      }
    }
  )
)
