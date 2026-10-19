import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Relative base so the build works on GitHub Pages (username.github.io/gallery-with-claude/)
export default defineConfig({
  plugins: [react()],
  base: "./",
});
