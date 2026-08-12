import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    '__SERVER_FORWARD_CONSOLE__': 'false',
    'process.env': {}
  },
  resolve: {
    alias: {
      '@': path.resolve(process.cwd(), './src'),
    },
  },
  server: {
    host: true, // Listen on all IP addresses (0.0.0.0, localhost, 127.0.0.1)
    port: 5173, // Vite default port
    strictPort: false, // Automatically fallback to 3000 or next available port if 5173 is occupied
    open: true,
  },
  preview: {
    port: 5173,
    host: true,
  }
});

