import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/VALStats/',
  test: {
    globals: true,
  },
  plugins: [vue()]
})
