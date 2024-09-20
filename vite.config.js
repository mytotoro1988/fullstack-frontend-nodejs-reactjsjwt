import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  preview: {
    port: 3004, // Cổng chạy server preview (nếu dùng lệnh 'vite preview')
    open: true,
  },
  plugins: [react()],
});
