import { ValidateEnv } from '@julr/vite-plugin-validate-env'
import { defineConfig } from '@solidjs/start/config'
import tailwindcss from '@tailwindcss/vite'
import IconSpritePlugin from './plugins/iconsSpriteVitePlugin.js'

export default defineConfig({
  vite: {
    plugins: [ValidateEnv({}), tailwindcss(), IconSpritePlugin()]
  },
  server: {
    preset: 'vercel'
  }
})
