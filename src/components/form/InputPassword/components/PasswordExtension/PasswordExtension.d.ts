import { InputHTMLAttributes } from 'react'

export interface IPasswordExtensionProps
  extends Pick<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  onClick: () => void
}
