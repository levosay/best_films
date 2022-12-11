export type TSize = 36 | 30 | 22 | 18 | 17
export type TTheme =
  | 'primary-base'
  | 'primary-dark'
  | 'black'
  | 'white'

export interface ITitleProps {
  size: TSize
  theme?: TTheme
  text?: string
  uppercase?: boolean
}
