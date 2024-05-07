import { ValidateEnv } from '@julr/vite-plugin-validate-env'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from '@solidjs/start/config'
import { IconSpritePlugin } from './plugins/iconsSpriteVitePlugin.js'

export default defineConfig({
  vite: {
    plugins: [ValidateEnv({}), tailwindcss(), IconSpritePlugin()]
  },
  server: {
    preset: 'vercel'
  }
})
