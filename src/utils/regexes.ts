export const isExternalLink = (url: string) =>
  /^(http|https|ftp|mailto|tel):/.test(url)
