export const InternalLink = {
  home: '/',
  about: '/about'
} as const

export const ownerEmail = 'rskrabucha13@gmail.com'

export const ExternalLink = {
  github: 'https://github.com/radekskrabucha',
  linkedin: 'https://www.linkedin.com/in/radoslaw-skrabucha',
  twitter: 'https://twitter.com/radek_1313',
  email: `mailto:${ownerEmail}`,
  sourceCode: 'https://github.com/radekskrabucha/solid-start-template',
  solidJsSourceCode: 'https://github.com/solidjs/solid',
  solidJsDocs: 'https://docs.solidjs.com'
} as const

export const AppName = 'SolidStart App Template'

export const defaultSeoTags = {
  description: 'SolidStart Template app to quickly bootstrap your application.',
  siteUrl: import.meta.env.VITE_APP_BASE_URL
}
