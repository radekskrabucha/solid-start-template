import { defineConfig, Schema } from '@julr/vite-plugin-validate-env'

export default defineConfig({
  VITE_APP_BASE_URL: Schema.string({ format: 'url' }),
  VITE_WEB3_FORM_KEY: Schema.string(),
  VITE_CONTENTFUL_SPACE_ID: Schema.string(),
  VITE_CONTENTFUL_API_KEY: Schema.string()
})
