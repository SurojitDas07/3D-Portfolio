import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // Ensure that non-JavaScript assets are treated as modules and included in the bundle
      output: {
        manualChunks: undefined,
      },
    },
  },
});
