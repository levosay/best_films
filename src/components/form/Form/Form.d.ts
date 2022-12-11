import { UseFormProps } from 'react-hook-form'
import { HookFormValues } from 'types'
import { Input } from '../Input'
import { InputMask } from '../InputMask'
import { InputPassword } from '../InputPassword'

export interface IFormProps extends UseFormProps<HookFormValues>, Partial {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	schema?: any
	onSubmit: (data: HookFormValues) => void
}

export interface IFormExtensions {
	Input: typeof Input
	InputMask: typeof InputMask
	InputPassword: typeof InputPassword
}
