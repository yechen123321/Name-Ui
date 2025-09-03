import { defineConfig } from 'vitest/config'
import { resolve } from 'path'

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./test/setup.ts'],
    include: ['packages/**/*.{test,spec}.{js,ts,tsx}'],
    exclude: ['node_modules', 'dist', 'build']
  },
  resolve: {
    alias: {
      '@name-ui/core': resolve(__dirname, 'packages/core/src'),
      '@name-ui/vue': resolve(__dirname, 'packages/vue/src'),
      '@name-ui/react': resolve(__dirname, 'packages/react/src'),
      '@name-ui/theme': resolve(__dirname, 'packages/theme/src')
    }
  }
})