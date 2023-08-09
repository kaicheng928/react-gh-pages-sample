import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // 開發中(dev)、產品路徑(build)
  base: process.env.NODE_ENV === 'production' ? '/react-gh-pages-sample/' : '/',
  plugins: [react()],
})
