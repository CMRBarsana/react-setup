import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: '/src',
      assets: '/src/assets',
      'core-ui': '/src/core-ui',
      global: '/src/global',
      modules: '/src/modules',
      tuts: '/src/tuts',
    },
  },
});
