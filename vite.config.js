import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { fileURLToPath, URL } from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
  ],
  server: {

    proxy: {
      '/api': 'http://localhost:8080',
    }

  },
  base: "/prvt2/",

})
