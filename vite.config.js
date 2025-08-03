import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // tailwindcss()
  ],
    server: {
    host: '0.0.0.0',       // IMPORTANT!
    port: process.env.PORT || 5173, // Render sets a PORT env variable
    allowedHosts: ['.onrender.com']
  }
})
