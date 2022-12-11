export const protocolLinkCheck = (
  href: string | undefined
): boolean => {
  if (!href) return false
  return /^https?:\/\/.*$/g.test(href)
}
