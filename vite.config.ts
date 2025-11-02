import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import * as path from "path";

export default defineConfig(({ mode }) => {
  // .env faylini o‘qish
  const env = loadEnv(mode, process.cwd(), "");

  return {
    root: path.resolve(__dirname, "client"), // asosiy papka
    server: {
      host: "localhost",
      port: 8082,
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "client"),
        "@shared": path.resolve(__dirname, "shared"),
      },
    },
    build: {
      outDir: "../dist",
    },
    plugins: [react()],
    define: {
      // .env dagi o‘zgaruvchilarni global o‘zgarmas sifatida uzatish
      "process.env": env,
    },
  };
});
