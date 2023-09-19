import * as path from "path";
import svgr from '@svgr/rollup';
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@pages': path.resolve(__dirname, "src/pages"),
      '@entities':path.resolve(__dirname, "src/entities"),
      '@features':path.resolve(__dirname, "src/features"),
      '@widgets':path.resolve(__dirname, "src/widgets"),
      '@assets':path.resolve(__dirname, "src/assets"),
      '@shared':path.resolve(__dirname, "src/shared"),
    }
  }
})
