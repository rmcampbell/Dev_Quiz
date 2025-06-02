import { defineConfig } from 'vite';
// import { configDefaults } from 'vitest/config';
import react from '@vitejs/plugin-react';
import unusedAssetsPlugin from './vite-plugin-unused-assets';


export default defineConfig({
  plugins: [
    react(),
    unusedAssetsPlugin()
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
    emptyOutDir: true
    // rollupOptions: {
    //   output: {
    //     manualChunks(id) {
    //       if (id.includes('node_modules')) {
    //         // Separate out big dependencies
    //         if (id.includes('react')) return 'vendor_react';
    //         return 'vendor';
    //       }
    //     }
    //   }
    // }
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
