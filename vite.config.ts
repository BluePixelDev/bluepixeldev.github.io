import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@" : resolve(__dirname, "./src"),
      "@routes" : resolve(__dirname, "./src/routes"),
      "@assets" : resolve(__dirname, "./src/assets")
    }
  }
});
