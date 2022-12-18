import { FC } from 'react'
import { CirclePreloader } from './CirclePreloader'
import { IPreloaderProps } from './Preloader.d'
import { PreloaderContainer } from './styled'

export const Preloader: FC<IPreloaderProps> = ({
  backgroundColor = '#FFFFFF',
  mode = 'component',
  strokeWidth = 50,
  opacity = 0.6,
  height = 100,
  width = 100,
}) => {
  if (mode === 'component') {
    return (
      <CirclePreloader
        strokeWidth={strokeWidth}
        height={height}
        width={width}
      />
    )
  }

  return (
    <PreloaderContainer
      mode={mode}
      backgroundColor={backgroundColor}
      opacity={opacity}
    >
      <CirclePreloader
        strokeWidth={strokeWidth}
        height={height}
        width={width}
      />
    </PreloaderContainer>
  )
}
