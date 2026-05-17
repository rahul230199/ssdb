import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Disable PostCSS to avoid tailwind error
  css: {
    postcss: false
  }
})
