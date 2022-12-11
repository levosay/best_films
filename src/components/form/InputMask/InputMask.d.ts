import { InputHTMLAttributes, ReactNode } from 'react'
import { IBaseInputProps } from 'types'

export interface IInputMaskProps
  extends InputHTMLAttributes<HTMLInputElement>,
    IBaseInputProps {
  endComponent?: ReactNode
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  mask: string | RegExp | any
}
