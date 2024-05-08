import { defineConfig, Schema } from '@julr/vite-plugin-validate-env'

export default defineConfig({
  VITE_APP_BASE_URL: Schema.string({ format: 'url' })
})
