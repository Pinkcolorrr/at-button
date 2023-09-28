// @ts-nocheck
import * as path from "path";
import svgr from "@svgr/rollup";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react()],
  resolve: {
    alias: {
      "@app": path.resolve(__dirname, "src/app"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@widgets":path.resolve(__dirname, "src/widgets"),
      "@features":path.resolve(__dirname, "src/features"),
      "@entities":path.resolve(__dirname, "src/entities"),
      "@shared":path.resolve(__dirname, "src/shared"),
      "@assets":path.resolve(__dirname, "src/assets")
    }
  }
});
