export const isActivePath = (
  currentPath: string,
  path: string,
  exact = false
): boolean => {
  const normalizedCurrentPath = currentPath.toLowerCase().replace(/\/$/, '')
  const normalizedPath = path.toLowerCase().replace(/\/$/, '')

  if (normalizedCurrentPath === '/') {
    return normalizedPath === normalizedCurrentPath
  }
  if (exact) {
    return normalizedCurrentPath === normalizedPath
  }

  return normalizedCurrentPath.startsWith(normalizedPath)
}
