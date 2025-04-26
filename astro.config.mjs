// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    icon({
      include: {
        articons: ["*"],
        logos: ["cib", "github-icon"],
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});

