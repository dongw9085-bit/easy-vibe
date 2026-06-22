import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  // GitHub Pages 部署时 base = /easy-vibe/app/，本地开发时 = /
  base: mode === 'production' ? '/easy-vibe/app/' : '/',
  server: {
    port: 5173,
    proxy: {
      '/api': { target: 'http://localhost:3001', changeOrigin: true }
    }
  },
  build: {
    outDir: 'dist'
  }
}))
