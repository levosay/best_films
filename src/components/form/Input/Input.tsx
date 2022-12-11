import React, { FunctionComponent } from 'react'
import { FieldError, useFormContext, get } from 'react-hook-form'
import { HookFormValues } from 'types'
import { Hint } from '../Hint'
import { Label } from '../Label'
import { IInputProps } from './Input.d'
import {
	InputStyled,
	InputContainer,
	InputWrapper,
	EndComponent,
} from './styled'

export const Input: FunctionComponent<IInputProps> = ({
	disabled,
	placeholder,
	hookFormProps,
	endComponent,
	labelMessage,
	hintMessage,
	required,
	...props
}): JSX.Element => {
	const {
		register,
		formState: { errors },
	} = useFormContext<HookFormValues>()
	const error = get(errors, hookFormProps.inputFormName) as
		| FieldError
		| undefined
	const errMsg = error ? error.message : ''
	const message = errMsg || hintMessage

	return (
		<InputContainer>
			{labelMessage && (
				<Label
					svg={'asterisk'}
					message={labelMessage}
					required={required}
					htmlFor={hookFormProps?.inputFormName}
				/>
			)}
			<InputWrapper>
				<InputStyled
					isError={!!errors[hookFormProps.inputFormName]}
					disabled={disabled}
					placeholder={placeholder}
					required={required}
					{...register(hookFormProps.inputFormName)}
					{...props}
				/>
				{endComponent && <EndComponent>{endComponent}</EndComponent>}
			</InputWrapper>
			{message && <Hint isError={!!errMsg} message={message} />}
		</InputContainer>
	)
}
