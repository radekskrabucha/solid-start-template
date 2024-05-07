export const InternalLink = {
  home: '/',
  about: '/about'
} as const

export const ExternalLink = {
  github: import.meta.env.VITE_GITHUB_URL,
  linkedin: import.meta.env.VITE_LINKEDIN_URL,
  twitter: import.meta.env.VITE_TWITTER_URL,
  email: `mailto:${import.meta.env.VITE_EMAIL}`,
  sourceCode: 'https://github.com/radekskrabucha/solid-start-template'
} as const

export const AppName = 'SolidStart App Template'

export const defaultSeoTags = {
  description: 'SolidStart Template app to quickly bootstrap your application.',
  siteUrl: import.meta.env.VITE_APP_BASE_URL
}
