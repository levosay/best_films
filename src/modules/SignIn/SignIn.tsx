import { FunctionComponent, useEffect } from 'react'
import { ButtonControl, Form, Separator, Title } from 'components'
import { Mask } from 'utils/constants'
import { UseAuth } from '../../hooks'
import { HookFormValues } from '../../types'
import { ISignInProps } from './SignIn.d'
import {
	SignInModuleStyled,
	HeaderTitle,
	InputsWrapper,
	BtnWrapper,
} from './styled'
import { YupSchema } from './yupSchema'

export const SignInModule: FunctionComponent<
	ISignInProps
> = (): JSX.Element => {
	const { loginUser } = UseAuth()

	const submit = (data: HookFormValues) => {
		loginUser(data)
	}
	return (
		<SignInModuleStyled>
			<HeaderTitle>
				<Title size={36} text="Войти" />
			</HeaderTitle>

			<Form onSubmit={submit} schema={YupSchema}>
				<InputsWrapper>
					<Form.InputMask
						mask={Mask.EmailRegEx}
						labelMessage="Введите Email"
						placeholder="Email"
						hookFormProps={{
							inputFormName: 'email',
						}}
						type="email"
					/>
					<Form.InputPassword
						labelMessage="Введите пароль"
						placeholder="• • • • • • •"
						hookFormProps={{
							inputFormName: 'password',
						}}
					/>
				</InputsWrapper>
				<Separator />
				<BtnWrapper>
					<ButtonControl as="button" title="Отправить" />
				</BtnWrapper>
			</Form>
		</SignInModuleStyled>
	)
}
