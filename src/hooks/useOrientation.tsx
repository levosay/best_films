import { useEffect } from 'react'
import { getScreenOrientation } from 'utils/helpers'

export const useOrientation = (callback: () => void) => {
  const orientation = getScreenOrientation()
  const detectChanges = (evt: MediaQueryListEvent) => {
    if (evt.matches) {
      callback()
    }
  }
  useEffect(() => {
    orientation?.addEventListener('change', detectChanges)

    return () => {
      orientation?.removeEventListener('change', detectChanges)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orientation])
}
