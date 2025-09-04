import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'src/index.css'),
        dark: resolve(__dirname, 'src/dark.css'),
      },
      output: {
        assetFileNames: '[name].[ext]',
      },
    },
    outDir: 'dist',
    assetsDir: '',
    emptyOutDir: true,
  },
})
