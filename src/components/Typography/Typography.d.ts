export type TFontWeight = 400 | 440 | 500 | 700
export type TType = 'p' | 'span'
export type TSize = 26 | 17 | 14 | 12 | 11

export interface ITypographyProps {
  type?: TType
  size?: TSize
  fontWeight?: TFontWeight
}
