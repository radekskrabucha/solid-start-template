export const getCurrentYear = () => new Date().getFullYear()

export const getCurrentDate = () =>
  new Date().toLocaleTimeString('pl-PL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  })
