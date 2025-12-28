import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', //or true
    port: 80,
    allowedHosts: ['wissaldz.ddns.net', "all"],
  },
})
