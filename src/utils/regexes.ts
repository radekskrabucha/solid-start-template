export const isExternalLink = (url: string) =>
  /^(http|https|ftp|mailto|tel):/.test(url) ||
  /^[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/.test(url)
