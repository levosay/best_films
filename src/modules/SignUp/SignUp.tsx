import { setCookie } from 'cookies-next'
import { initializeApp } from 'firebase/app'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { getDatabase, set, ref } from 'firebase/database'
import { useRouter } from 'next/router'
import { FunctionComponent, useEffect } from 'react'
import { ButtonControl, Form, Separator, Title } from 'components'
import { HookFormValues } from 'types'
import { Mask } from 'utils/constants'
import { UseAuth } from '../../hooks'
import { useAppSelector, userStore } from '../../store'
import { ISignUpProps } from './SignUp.d'
import {
	BtnWrapper,
	HeaderTitle,
	InputsWrapper,
	SignUpModuleStyled,
} from './styled'
import { YupSchema } from './yupSchema'

// mongodb+srv://levosay:<password>@cluster0.zvr2jxw.mongodb.net/?retryWrites=true&w=majority

export const SignUpModule: FunctionComponent<
	ISignUpProps
> = (): JSX.Element => {
	const { createUser } = UseAuth()
	const { isError } = useAppSelector(userStore)

	useEffect(() => {
		console.log('isError)______- ', isError)
	}, [isError])

	const submit = (data: HookFormValues) => {
		createUser(data)
	}

	return (
		<SignUpModuleStyled>
			<HeaderTitle>
				<Title size={36} text="Регистрация" />
			</HeaderTitle>

			<Form onSubmit={submit} schema={YupSchema}>
				<InputsWrapper>
					<Form.InputMask
						mask={Mask.withoutSpec}
						labelMessage="Придумайте Ник"
						placeholder="Name"
						hookFormProps={{
							inputFormName: 'name',
						}}
					/>
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
						labelMessage="Придумайте пароль"
						placeholder="• • • • • • •"
						hookFormProps={{
							inputFormName: 'password',
						}}
					/>
					{/*<Form.InputPassword*/}
					{/*	labelMessage="Повторите пароль"*/}
					{/*	placeholder="• • • • • • •"*/}
					{/*	hookFormProps={{*/}
					{/*		inputFormName: 'repeatPassword',*/}
					{/*	}}*/}
					{/*/>*/}
				</InputsWrapper>
				<Separator />
				<BtnWrapper>
					<ButtonControl as="button" title="Отправить" />
				</BtnWrapper>
			</Form>
		</SignUpModuleStyled>
	)
}
