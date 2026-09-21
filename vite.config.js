import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ command }) => ({
  plugins: [react(), tailwindcss()],

  // Dev server serves at root "/". Only the production build
  // (npm run build, deployed to GitHub Pages) gets the subpath.
  base: command === "build" ? "/Shahain-Outdoor-Living/" : "/",

  build: {
    sourcemap: false,
  },
}));