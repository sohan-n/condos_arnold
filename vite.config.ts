import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'serve' ? '/' : '/condos_arnold/',
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        '404': 'index.html',
      },
    },
  },
}))
