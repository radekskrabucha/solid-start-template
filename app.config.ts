import { ValidateEnv } from '@julr/vite-plugin-validate-env'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from '@solidjs/start/config'

export default defineConfig({
  vite: {
    plugins: [ValidateEnv({}), tailwindcss()]
  },
  server: {
    preset: 'vercel'
  }
})
