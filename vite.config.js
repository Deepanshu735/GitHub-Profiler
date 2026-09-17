import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/GitHub-Profiler/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});