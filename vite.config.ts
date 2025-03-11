import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@api': resolve(__dirname, './src/api'),
      '@store': resolve(__dirname, './src/store'),
      '@hooks': resolve(__dirname, './src/hooks'),
      '@constant': resolve(__dirname, './src/constant'),
      '@components': resolve(__dirname, './src/components'),
      '@helpers': resolve(__dirname, './src/helpers'),
      '@assets': resolve(__dirname, './src/assets'),
      '@utils': resolve(__dirname, './src/utils'),
      '@views': resolve(__dirname, './src/views'),
      '@': resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3007,
  },
})
