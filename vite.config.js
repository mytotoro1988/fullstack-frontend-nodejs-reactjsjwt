import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // Thư mục xuất file build
    sourcemap: true, // Tạo sourcemap để hỗ trợ debug trong môi trường production
  },
  server: {
    port: 3002, // Cổng chạy server dev
    open: true, // Tự động mở trình duyệt khi chạy server dev
  },
  preview: {
    port: 3003, // Cổng chạy server preview (nếu dùng lệnh 'vite preview')
    open: true,
  },
});
