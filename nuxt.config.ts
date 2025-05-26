// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },

  modules: ["@nuxt/fonts", "@nuxt/image-edge"],

  app: {
    head: {
      title: "Trang bán hàng trực tuyến của Biti's Việt Nam",
      meta: [
        {
          name: "description",
          content: "Trang bán hàng trực tuyến của Biti's Việt Nam",
        },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  nitro: {
    compressPublicAssets: true,
  },
  routeRules: {
    "/_nuxt/**": {
      headers: { "cache-control": "public, max-age=31536000, immutable" },
    },
    "/_ipx/**": {
      headers: { "cache-control": "public, max-age=31536000, immutable" },
    },
    "/images/**": {
      headers: { "cache-control": "public, max-age=31536000, immutable" },
    },
    "/icons/**": {
      headers: { "cache-control": "public, max-age=31536000, immutable" },
    },
    "/fonts/**": {
      headers: { "cache-control": "public, max-age=31536000, immutable" },
    },
  },
  css: ["~/assets/main.css"],
});
