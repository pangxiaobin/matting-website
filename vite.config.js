import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 4001,
  },
  plugins: [vue()],
  resolve: {
    // 实际的路径转换  @  -> src
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  base: process.env.NODE_ENV === 'production' && process.env.VERCEL !== '1'
  ? '/matting-website/' // GitHub Pages 部署时使用
  : '/',               // Vercel 或本地开发时使用
})
