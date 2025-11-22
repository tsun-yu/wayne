// filepath: /Users/wayne/Documents/react/wayne-portfolios/vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    open: true, // 啟動開發伺服器時自動打開瀏覽器
  },
  build: {
    outDir: "dist", // 確保輸出目錄是 dist
  },
});
