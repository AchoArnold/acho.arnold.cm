// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/sitemap", "@nuxt/fonts", "vuetify-nuxt-module"],

  vuetify: {
    vuetifyOptions: {
      theme: {
        defaultTheme: "dark",
      },
      icons: {
        defaultSet: "mdi-svg",
      },
    },
  },

  fonts: {
    families: [{ name: "Inter", provider: "google" }],
    defaults: {
      weights: [400, 500, 600, 700],
    },
  },

  css: ["~/assets/css/main.css"],

  site: {
    url: "https://acho.arnold.cm",
    name: "My Personal Website",
  },

  compatibilityDate: "2025-02-25",
});
