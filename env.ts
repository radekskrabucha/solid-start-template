import { defineConfig, Schema } from '@julr/vite-plugin-validate-env'

export default defineConfig({
  VITE_APP_BASE_URL: Schema.string({ format: 'url' }),
  VITE_EMAIL: Schema.string({ format: 'email' }),
  VITE_GITHUB_URL: Schema.string({ format: 'url' }),
  VITE_LINKEDIN_URL: Schema.string({ format: 'url' }),
  VITE_TWITTER_URL: Schema.string({ format: 'url' })
})
