import { defineConfig } from 'vite';
// import { configDefaults } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import unusedAssetsPlugin from './vite-plugin-unused-assets';


export default defineConfig({
  plugins: [
    react(),
    unusedAssetsPlugin(),
    visualizer({
      filename: 'dist/stats.html',
      open: true, // automatically opens report in browser
      gzipSize: true,
      brotliSize: true
    })
  ],
  // base: '/dev_quiz/',
  server: {
    watch: {
      usePolling: true // required for container hot reloading
    },
    port: 3000,
    host: true, // fixes container xdg-open issues
    open: true
  },
  build: {
    outDir: './dist',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        // manualChunks: undefined
        // manualChunks(id) {
        //   if (id.includes('node_modules')) return 'vendor';
        // }
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Normalize path to avoid issues with slashes (especially on Windows)
            const normalizedId = id.replace(/\\/g, '/');

            // Match only core React packages
            if (normalizedId.includes('/node_modules/framer-motion/')) return 'vendor_motion';
            if (normalizedId.includes('/node_modules/react-router-dom/')) return 'vendor_router';

            return 'vendor';
          }
        }
      }
    }
  }
  // test: {
  //   ...configDefaults,
  //   globals: true,
  //   environment: "happy-dom",
  //   setupFiles: "./testSetup.ts",
  //   exclude: [
  //     "**/node_modules/**",
  //     "**/dist/**",
  //     "**/e2e/*" /* do not include playwright files */
  //   ]
  // }
});
