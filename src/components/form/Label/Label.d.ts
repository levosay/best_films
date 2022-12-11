import { LabelHTMLAttributes } from 'react'
import { Icons } from 'types'

export interface ILabelProps
  extends LabelHTMLAttributes<HTMLLabelElement> {
  message?: string
  required?: boolean
  svg: Icons
}
