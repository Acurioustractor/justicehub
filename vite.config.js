import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.png'],
  server: {
    hmr: {
      overlay: false
    },
    port: 5173,
    open: true
  },
  optimizeDeps: {
    include: ['leaflet', 'react-leaflet']
  },
  base: '/justicehub/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  publicDir: 'public',
}) 