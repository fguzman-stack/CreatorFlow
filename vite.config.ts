import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { copyFileSync } from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base: '/CreatorFlow/',
  plugins: [
    react(),
    {
      name: 'copy-404',
      closeBundle() {
        try {
          copyFileSync(
            path.resolve(__dirname, 'public/404.html'),
            path.resolve(__dirname, 'dist/404.html')
          );
        } catch (error) {
          console.error('Error copying 404.html:', error);
        }
      },
    },
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
}); 