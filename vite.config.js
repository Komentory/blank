import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      __: resolve(__dirname, './src'),
    },
  },
});
