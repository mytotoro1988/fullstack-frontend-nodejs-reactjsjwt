import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
// https://vitejs.dev/config/
export default defineConfig({
  preview: {
    port: 3004, // Cổng chạy server preview (nếu dùng lệnh 'vite preview')
    open: true,
  },
  build: {
    chunkSizeWarningLimit: 1600,
    rollupOptions: {
      input: {
        input: resolve("./index.html"), // Đảm bảo đường dẫn này đúng,
        // main: resolve("/dist", "index.html"),
        // nested: resolve("/dist", "nested/index.html"),
      },
    },
  },
  server: {
    host: true
  },
  plugins: [react()],
});
