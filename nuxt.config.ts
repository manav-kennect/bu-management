// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from 'vite-plugin-vuetify'
import { createResolver } from '@nuxt/kit'

const { resolve } = createResolver(import.meta.url)
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['vuetify/lib/styles/main.sass','~/assets/variables.scss'],
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
        vuetify({
          styles: { configFile: resolve('./assets/variables.scss') },
        })
      )
    },
  },
  typescript: {
    shim: false,
  },

})
