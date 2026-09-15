import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  build: { target: "es2020", outDir: "build" },
  server: { host: "127.0.0.1", port: 3000, open: false },
});
