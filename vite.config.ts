/// <reference types="vitest"/>
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 支持jsx
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx({})],
  // 用于vitest
  test: {
    // jest like test apis
    globals: true,
    // 模拟dom环境
    environment: 'happy-dom',
    // 支持tsx
    transformMode: {
      web: [/\.[jt]sx$/]
    }
  }
})
