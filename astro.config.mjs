import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  srcDir: "./demo",
  image: {
    remotePatterns: [{ protocol: "https" }],
  },
  site: "https://suven.github.io",
  base: "astro-link-previews",
});
