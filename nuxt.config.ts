// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },

  vite: {
    plugins: [
      await import('@tailwindcss/vite').then((m) => m.default()),
    ],
  },

  modules: ['nuxt-swiper'],
})