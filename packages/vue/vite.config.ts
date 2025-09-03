import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'NameUIVue',
      fileName: 'index',
      formats: ['es']
    },
    rollupOptions: {
      external: ['vue', '@name-ui/core'],
      output: {
        globals: {
          vue: 'Vue',
          '@name-ui/core': 'NameUICore'
        }
      }
    },
    sourcemap: true,
    minify: false
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
})