// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxt/content", "@invictus.codes/nuxt-vuetify", '@funken-studio/sitemap-nuxt-3'],
  vuetify: {
    vuetifyOptions: {
      theme: {
        defaultTheme: "dark",
      },
    },
    moduleOptions: {
      /* nuxt-vuetify module options */
      treeshaking: true,
      useIconCDN: true,

      /* vite-plugin-vuetify options */
      styles: true,
      autoImport: true,
      useVuetifyLabs: true,
    },
  },
  // @ts-ignore
  sitemap: {
    hostname: 'https://acho.arnold.cm',
    cacheTime: 1
  },
});
