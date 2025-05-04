import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  base: "/carter/", // ensure trailing slash for correct asset resolution on GH Pages
  plugins: [
    svelte(),
    VitePWA({
      manifest: {
        name: "Svara",
        short_name: "Svara",
        description: "Advanced mobile music player",
        theme_color: "#000000",
        start_url: "/carter#dashboard",
        scope: "/carter/",
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg,ttf}"],
      },
      registerType: "autoUpdate",
      strategies: "generateSW",
      devOptions: {
        enabled: true,
      },
    }),
  ],
});
