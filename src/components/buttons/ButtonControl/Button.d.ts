import { LinkProps } from 'next/dist/client/link'
import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from 'react'

type TTheme =
  | 'primary'
  | 'white'
  | 'black'
  | 'gray'

type TFontWeight = 500 | 700

type BaseProps = {
  as?: 'a' | 'button'
  title?: string
  theme?: TTheme
  startIcon?: ReactNode
  endIcon?: ReactNode
  fontWeight?: TFontWeight
  fullWidth?: boolean
  noFilled?: boolean
}

export type ButtonAsButton = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    as?: 'button'
  }

type ButtonAsLink = BaseProps &
  Omit<LinkProps, keyof BaseProps> & {
    as?: 'a'
    href: string
  }

type ButtonAsNative = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
    as?: 'a'
    href: string
  }

export type TButtonProps =
  | ButtonAsButton
  | ButtonAsLink
  | ButtonAsNative
