// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/sitemap",
    "vuetify-nuxt-module",
  ],

  vuetify: {
    vuetifyOptions: {
      theme: {
        defaultTheme: "dark",
      },
      icons: {
        defaultSet: 'mdi-svg',
      }
    },
    moduleOptions: {
    },
  },

  site: {
    url: 'https://acho.arnold.cm',
    name: 'My Personal Website'
  },

  compatibilityDate: "2025-02-25",
});