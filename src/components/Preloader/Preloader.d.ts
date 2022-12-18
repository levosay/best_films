type TLoaderMode = 'fullscreen' | 'container' | 'component'
export interface IPreloaderProps {
  mode?: TLoaderMode
  opacity?: number
  backgroundColor?: string
  strokeWidth?: number
  height?: number
  width?: number
}
