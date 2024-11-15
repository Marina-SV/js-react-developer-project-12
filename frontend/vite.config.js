import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  port: 5002,
  proxy: {
    // Проксируем запросы к API
    '/api': {
      target: 'http://localhost:5001',
    }
  }
})
