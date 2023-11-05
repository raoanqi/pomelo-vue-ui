/// <reference types="vitest"/>
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import type { UserConfig } from 'vitest/config'

const vitestConfig: UserConfig = {
  test: {
    globals: true,
    environment: 'jsdom'
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx({})],
  build: {
    sourcemap: true
  },
  test: vitestConfig.test
})
