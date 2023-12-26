// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from 'vite-plugin-vuetify'
import { createResolver } from '@nuxt/kit'

const { resolve } = createResolver(import.meta.url)
export default defineNuxtConfig({
  devtools: { enabled: true },
  server:{
    host: '0'
  },

  css: ['vuetify/lib/styles/main.sass','~/assets/variables.scss','~/assets/global.scss'],
  build: {
    transpile: ['vuetify'],
  },
  imports: {
    dirs: ['provide/**', 'composables/**', 'plugins/**'],
  },
  modules: ['@pinia/nuxt'],
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
  hooks: {
    'vite:extendConfig': (config) => {
      config.plugins.push(
        vuetify()
      )
    },
  },
  typescript: {
    shim: false,
  },

})
