import { InputHTMLAttributes, ReactNode } from 'react'
import { IBaseInputProps } from 'types'

export interface IInputProps
	extends InputHTMLAttributes<HTMLInputElement>,
		IBaseInputProps {
	endComponent?: ReactNode
}
