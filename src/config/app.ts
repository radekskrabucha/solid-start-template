export const InternalLink = {
  home: '/',
  about: '/o-nas',
  portfolio: '/portfolio',
  offer: '/oferta',
  contact: '/kontakt'
} as const

export const ownerEmail = 'biuro@kaes-architekci.pl'
export const ownerPhoneNumber = '669 832 784'
export const ownerPhoneNumberPrefix = '+48'

export const ExternalLink = {
  email: `mailto:${ownerEmail}`,
  phoneNumber: `tel:${ownerPhoneNumberPrefix} ${ownerPhoneNumber}`,
  facebook: 'https://www.facebook.com/KaeSarchitekci',
  instagram: 'https://www.instagram.com/kaes_architekci',
  tiktok: 'https://www.tiktok.com/@kaes.architekci'
} as const

export const AppName = 'KaeS'
export const AppNameFull = 'KaeS Architekci'

export const defaultSeoTags = {
  description:
    'Kaes Architekci – kreatywna pracownia architektoniczna opracowująca projekty prywatne i komercyjne z branży architektury i wnętrz.',
  siteUrl: import.meta.env.VITE_APP_BASE_URL
}
