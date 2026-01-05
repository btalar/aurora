/// <reference types="vite/client" />
import { createHash } from 'node:crypto'
import { fileURLToPath } from 'node:url'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  root: 'playground',
  publicDir: false,
  css: {
    devSourcemap: true,
    modules: {
      generateScopedName: (className, filename) => {
        const hash = createHash('sha256')
          .update(filename)
          .update(className)
          .digest('base64')
          .replace(/\//g, '')
          .replace(/\+/g, '')
          .substring(0, 5)
        return `${className}__${hash}`
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'playground-dist',
  },
})
