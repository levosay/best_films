import React, { FunctionComponent } from 'react'
import { Controller, FieldError, get, useFormContext } from 'react-hook-form'
import { HookFormValues } from 'types'
import { Hint } from '../Hint'
import { InputContainer, EndComponent } from '../Input/styled'
import { Label } from '../Label'
import { IInputMaskProps } from './InputMask.d'
import { InputStyled } from './styled'

export const InputMask: FunctionComponent<IInputMaskProps> = ({
	placeholder,
	disabled,
	hookFormProps,
	endComponent,
	labelMessage,
	hintMessage,
	required,
	defaultValue = '',
	mask,
}): JSX.Element => {
	const {
		control,
		formState: { errors },
		setValue,
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
			<Controller
				control={control}
				defaultValue={String(defaultValue)}
				name={hookFormProps.inputFormName}
				render={({ field: { value, ref, onBlur } }) => {
					return (
						<InputStyled
							disabled={disabled}
							mask={mask}
							inputRef={ref}
							placeholder={placeholder}
							defaultValue={defaultValue}
							value={value as string}
							onAccept={(value) => {
								setValue(hookFormProps.inputFormName, `${value}`)
							}}
							onBlur={onBlur}
						/>
					)
				}}
			/>
			{message && <Hint isError={!!errMsg} message={message} />}
			{endComponent && <EndComponent>{endComponent}</EndComponent>}
		</InputContainer>
	)
}
