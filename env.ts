import { defineConfig, Schema } from '@julr/vite-plugin-validate-env'

export default defineConfig({
  VITE_TEST: Schema.string()
})
