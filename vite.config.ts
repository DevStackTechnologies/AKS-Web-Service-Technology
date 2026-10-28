import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Enable faster React refresh and JSX transform
      babel: {
        plugins: [],
      },
    }),
  ],
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
    host: true,
    port: 5173,
    strictPort: false,
    open: true,
  },
  preview: {
    port: 5173,
    host: true,
  },
  esbuild: {
    // Remove console & debugger in production for smaller bundle
    drop: process.env.NODE_ENV === 'production' ? ['console', 'debugger'] : [],
    // Enable minification of identifiers for smaller bundle
    minifyIdentifiers: true,
    minifySyntax: true,
    minifyWhitespace: true,
    // Target modern browsers for smaller output
    target: 'es2020',
    // Enable tree-shaking via pure annotations
    legalComments: 'none',
  },
  build: {
    target: 'es2020',
    cssCodeSplit: true,
    // Use esbuild for fastest minification
    minify: 'esbuild',
    emptyOutDir: false,
    // Enable source maps only for debugging (disable for production PSI)
    sourcemap: false,
    // Ensure assets get content hashes for long cache TTL
    assetsInlineLimit: 4096, // Inline assets <4KB as base64
    rollupOptions: {
      output: {
        // Granular manual chunks for optimal loading
        manualChunks(id) {
          const normalizedId = id.replace(/\\/g, '/');
          if (normalizedId.includes('node_modules')) {
            // React core (critical - must load first)
            if (normalizedId.includes('/react/') || normalizedId.includes('/react-dom/') || normalizedId.includes('/scheduler/')) {
              return 'vendor-react';
            }
            // Framer motion (heavy animation library - defer)
            if (normalizedId.includes('/framer-motion/')) {
              return 'vendor-motion';
            }
            // Lucide icons (medium - shared across all pages)
            if (normalizedId.includes('/lucide-react/')) {
              return 'vendor-icons';
            }
            // canvas-confetti (very rarely used - isolate)
            if (normalizedId.includes('/canvas-confetti/')) {
              return 'vendor-confetti';
            }
            // All other vendor deps
            return 'vendor-core';
          }

          // Split heavy pages into their own async chunks
          if (normalizedId.includes('/pages/HomePage')) return 'page-home';
          if (normalizedId.includes('/pages/PortfolioPage')) return 'page-portfolio';
          if (normalizedId.includes('/pages/CareersPage')) return 'page-careers';
          if (normalizedId.includes('/pages/BlogsPage')) return 'page-blogs';
          if (normalizedId.includes('/pages/AboutPage')) return 'page-about';
          if (normalizedId.includes('/pages/ServicesPage')) return 'page-services';
          if (normalizedId.includes('/pages/ContactPage')) return 'page-contact';
          if (normalizedId.includes('/pages/AuthModal')) return 'page-auth';
          if (normalizedId.includes('/pages/candidate/')) return 'page-candidate';

          // Split heavy components
          if (normalizedId.includes('/components/documents/')) return 'comp-documents';
          if (normalizedId.includes('/components/ai/')) return 'comp-ai';
          if (normalizedId.includes('/components/tools/')) return 'comp-tools';
        },
        // Use content hash for asset filenames (enables long-term caching)
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const name = assetInfo.name ?? '';
          if (/\.(css)$/i.test(name)) return 'assets/css/[name]-[hash][extname]';
          if (/\.(png|jpe?g|webp|svg|gif|ico)$/i.test(name)) return 'assets/img/[name]-[hash][extname]';
          if (/\.(woff2?|ttf|otf|eot)$/i.test(name)) return 'assets/fonts/[name]-[hash][extname]';
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
    // Warn on large chunks so we can fix them
    chunkSizeWarningLimit: 800,
    // Optimize CSS
    cssMinify: true,
    // Report bundle sizes
    reportCompressedSize: true,
  }
});
