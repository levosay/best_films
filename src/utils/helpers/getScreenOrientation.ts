import { isBrowser } from 'utils/constants'

export function getScreenOrientation(): MediaQueryList | null {
  if (isBrowser) {
    const screenOrientation = window.matchMedia(
      '(orientation: landscape)'
    )
    return screenOrientation
  }

  return null
}
