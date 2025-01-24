// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  css: ['~/assets/css/main.css'],

  // pinia related config
  modules: [
    '@pinia/nuxt'
  ],
  imports: {
    dirs: ['./stores']
  },
  pinia: {
    autoImports: [
      'defineStore',
      'acceptHMRUpdate',
    ]
  }
})
