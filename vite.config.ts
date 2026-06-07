import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 4173
  },
  build: {
    chunkSizeWarningLimit: 1200,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('framer-motion')) {
              return 'vendor-motion';
            }
            if (id.includes('react-router-dom')) {
              return 'vendor-router';
            }
            if (id.includes('react-dom')) {
              return 'vendor-reactdom';
            }
            if (id.includes('/node_modules/react/')) {
              return 'vendor-react';
            }
            if (id.includes('react-icons')) {
              return 'vendor-icons';
            }
            if (id.includes('@emailjs')) {
              return 'vendor-emailjs';
            }
            return 'vendor';
          }
        }
      }
    }
  }
});
