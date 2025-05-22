import react from '@vitejs/plugin-react';
// import { defineConfig } from 'vite';
import { configDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  base: 'dev_quiz/',
  define: {
    'process.env': {}
  },
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
  },
  test: {
    ...configDefaults,
    globals: true,
    ui: true,
    uiBase: '/__vitest__/', // optional but good to have
    environment: 'happy-dom',
    setupFiles: './testSetup.ts',
    coverage: {
      provider: 'istanbul',
      reportsDirectory: './coverage',
      reporter: ['text', 'html'],
      enabled: true,
      all: true
    },
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/e2e/*'
    ],
    watch: false, // optional
    api: {
      port: 3100, // or another port you know is free
      host: '127.0.0.1' // instead of 0.0.0.0
    }
  }
});
