import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: './',
  publicDir: 'public',
  server: {
    port: 3000,
    open: true,
    cors: true,
    headers: {
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Embedder-Policy': 'require-corp'
    }
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        games: resolve(__dirname, 'games/games-mame.html'),
        basic: resolve(__dirname, 'basic/basic-mame.html'),
        assembler: resolve(__dirname, 'assembler/assembler-mame.html'),
        fastbasic: resolve(__dirname, 'fastbasic/fastbasic-mame.html'),
        logo: resolve(__dirname, 'logo/logoeng-mame.html'),
        mac65: resolve(__dirname, 'mac65/mac65-mame.html'),
        demos: resolve(__dirname, 'demos/demos-mame.html')
      }
    }
  },
  optimizeDeps: {
    exclude: ['*.wasm']
  }
});

