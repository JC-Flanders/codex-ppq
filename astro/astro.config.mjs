import { defineConfig } from "astro/config";
import viteConfig, { allowedHosts } from "./vite.config.js";

export default defineConfig({
  integrations: [],
  devToolbar: {
    enabled: false
  },
  server: {
    host: "0.0.0.0",
    allowedHosts
  },
  build: {
    format: "file"
  },
  trailingSlash: "never",
  vite: viteConfig
});
