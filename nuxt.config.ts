// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css:['~/assets/css/main.css'],
  modules: ['nuxt-svgo', '@nuxtjs/i18n', '@samk-dev/nuxt-vcalendar', '@pinia/nuxt'],
  i18n: {
    locales: [
      { code: 'lv', iso: 'lv-LV', name: 'Latviešu' },
      { code: 'en', iso: 'en-US', name: 'English' }
    ],
    defaultLocale: 'lv', // Задай язык по умолчанию
    strategy: 'prefix_and_default',
    vueI18n: './i18n.config.ts' // if you are using custom path, default
  }
})