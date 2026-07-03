import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/duolingo-auth/", // debe coincidir con el nombre de tu repo en GitHub
});
