import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { copyFileSync } from 'fs';

export default defineConfig({
  base: '/CreatorFlow/',
  plugins: [
    react(),
    {
      name: 'copy-404',
      closeBundle() {
        copyFileSync('public/404.html', 'dist/404.html');
      },
    },
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
}); 