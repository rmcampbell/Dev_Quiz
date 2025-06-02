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
      // automatically opens report in browser
      open: true,
      gzipSize: true,
      brotliSize: true
    })
  ],
  server: {
    watch: {
      // required for container hot reloading
      usePolling: true
    },
    port: 3000,
    // fixes container xdg-open issues
    host: true,
    open: true
  },
  build: {
    outDir: './dist',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          const normalizedId = id.replace(/\\/g, '/');
          if (normalizedId.includes('node_modules')) {
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
