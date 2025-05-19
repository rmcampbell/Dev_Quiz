import { defineConfig } from 'vite';
// import { configDefaults } from 'vitest/config';
import react from '@vitejs/plugin-react';


export default defineConfig({
  plugins: [react()],
  base: '/dev_quiz/',
  server: {
    watch: {
      // required for container hot reloading
      usePolling: true
    },
    port: 3000,
    host: true, // fixes container xdg-open issues
    open: true
  },
  build: {
    outDir: './dist',
    emptyOutDir: true
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
