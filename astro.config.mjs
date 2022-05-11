// astro.config.mjs
import { defineConfig } from "astro/config";
import { imagetools } from "vite-imagetools";
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [imagetools()],
    ssr: {
      external: ["svgo"],
    },
    server: {
      host: "0.0.0.0",
    },
  },
  server: {
    host: true,
  },
  integrations: [
    tailwind({
      // Example: Disable injecting a basic `base.css` import on every page.
      // Useful if you need to define and/or import your own custom `base.css`.
      config: { applyBaseStyles: false },
    }),
    partytown(),
  ],
});
