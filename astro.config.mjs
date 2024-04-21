import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  srcDir: "./demo",
  image: {
    remotePatterns: [{ protocol: "https" }],
  },
});
