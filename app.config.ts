import { ValidateEnv } from '@julr/vite-plugin-validate-env'
import { defineConfig } from '@solidjs/start/config'

export default defineConfig({
  vite: {
    plugins: [ValidateEnv({})]
  }
})
