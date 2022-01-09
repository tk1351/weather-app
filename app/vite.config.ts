import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import cors from '@koa/cors'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: true,
    proxy: {
      '/api': {
        target: 'https://www.metaweather.com',
        changeOrigin: true,
      },
    }
  },
})