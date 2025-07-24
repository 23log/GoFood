import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: '0.0.0.0',   // Allow connections from any IP (Ngrok needs this)
    port: 5173,        // You can change this if needed
    strictPort: true,  // Error if the port is busy instead of picking another
    cors: true,        // Enable CORS if needed
    allowedHosts: true
  }
})
