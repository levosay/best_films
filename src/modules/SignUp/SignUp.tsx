import { setCookie } from 'cookies-next'
import { initializeApp } from 'firebase/app'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { getDatabase, set, ref } from 'firebase/database'
import { useRouter } from 'next/router'
import { FunctionComponent } from 'react'
import { ButtonControl, Form, Separator, Title } from 'components'
import { useAppDispatch } from 'store'
import { setUser } from 'store/user'
import { HookFormValues } from 'types'
import { Mask } from 'utils/constants'
import { ISignUpProps } from './SignUp.d'
import {
	BtnWrapper,
	HeaderTitle,
	InputsWrapper,
	SignUpModuleStyled,
} from './styled'
import { YupSchema } from './yupSchema'

const firebaseConfig = {
	apiKey: 'AIzaSyDz1aH0kzBRdGkHhiYGDuJLJghuD1YOb9M',
	authDomain: 'best-films-base.firebaseapp.com',
	databaseURL:
		'https://best-films-base-default-rtdb.europe-west1.firebasedatabase.app',
	projectId: 'best-films-base',
	storageBucket: 'best-films-base.appspot.com',
	messagingSenderId: '462223000484',
	appId: '1:462223000484:web:76e6b64ca2c497516b7731',
}

// ryuuzaki44l@gmail.com

export const SignUpModule: FunctionComponent<
	ISignUpProps
> = (): JSX.Element => {
	const router = useRouter()
	const dispatch = useAppDispatch()
	const app = initializeApp(firebaseConfig)
	const auth = getAuth()
	const db = getDatabase(app)

	const submit = ({ name, email, password }: HookFormValues) => {
		createUserWithEmailAndPassword(auth, email, password)
			.then(({ user }) => {
				const uid = user.uid
				const userRef = ref(db, `/users/${uid}`)
				const newUser = {
					name,
					email,
					password,
					uid,
				}
				const newUserStore = {
					name,
					email,
				}

				setCookie('TokenAuth', uid)
				set(userRef, newUser)
				dispatch(setUser(newUserStore))
				router.push('/')
			})
			.catch((error) => {
				console.log('error ', error)
			})
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
						labelMessage="Ваш Ник на сайте"
						placeholder="Name"
						hookFormProps={{
							inputFormName: 'name',
						}}
					/>
					<Form.InputMask
						mask={Mask.EmailRegEx}
						labelMessage="Ваша почта"
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
