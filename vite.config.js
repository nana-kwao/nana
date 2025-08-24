import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import crypto from "crypto";

if (!globalThis.crypto) {
  globalThis.crypto = crypto;
  globalThis.crypto.getRandomValues = (arr) => crypto.randomFillSync(arr);
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/nana/",
  server: {
    proxy: {
      "/api": {
        target: "https://mycvserver.onrender.com:10000",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
