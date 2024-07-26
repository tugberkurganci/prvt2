import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { fileURLToPath, URL } from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
  ],
  server: {
    base: "/prvt2/",
    proxy: {
      '/api': 'http://localhost:8080',
    }
  },
  
  build: {
    outDir: 'assets',   // Build çıktısının 'dist' dizinine yapılmasını sağlar
    assetsDir: '',     // Asset'leri kök dizine yerleştirir
  }
})// vite.config.js

