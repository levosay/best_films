import { yupResolver } from '@hookform/resolvers/yup'
import { FunctionComponent, PropsWithChildren } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { HookFormValues } from 'types'
import { Input } from '../Input'
import { InputMask } from '../InputMask'
import { InputPassword } from '../InputPassword'
import { IFormExtensions, IFormProps } from './Form.d'
import { FormStyled } from './styled'

export const Form: FunctionComponent<PropsWithChildren<IFormProps>> &
	IFormExtensions = ({
	children,
	schema,
	mode = 'onBlur',
	onSubmit,
	...props
}): JSX.Element => {
	const methods = useForm<HookFormValues>({
		resolver: schema && yupResolver(schema),
		mode,
		...props,
	})

	return (
		<FormProvider {...methods}>
			<FormStyled onSubmit={methods.handleSubmit(onSubmit)}>
				{children}
			</FormStyled>
		</FormProvider>
	)
}

Form.Input = Input
Form.InputMask = InputMask
Form.InputPassword = InputPassword

export { Input, InputMask, InputPassword }
