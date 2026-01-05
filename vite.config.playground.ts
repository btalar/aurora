/// <reference types="vite/client" />
import { createHash } from 'node:crypto'
import { fileURLToPath } from 'node:url'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'ignore-storybook-files',
      resolveId(id) {
        if (id.includes('.storybook') || id.includes('Welcome.mdx')) {
          return id
        }
      },
      load(id) {
        if (id.includes('.storybook') || id.includes('Welcome.mdx')) {
          return 'export default {}'
        }
      },
    },
  ],
  root: 'playground',
  publicDir: false,
  optimizeDeps: {
    exclude: ['.storybook'],
  },
  server: {
    port: 3000,
    open: true,
    fs: {
      deny: ['.storybook/**'],
    },
  },
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
  build: {
    outDir: 'playground-dist',
  },
})
