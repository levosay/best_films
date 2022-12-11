import { FunctionComponent } from 'react'
import { Title, Form } from 'components'
import { ISignInProps } from './SignIn.d'
import { SignInModuleStyled } from './styled'

export const SignInModule: FunctionComponent<
	ISignInProps
> = (): JSX.Element => {
	const submit = () => {}
	return (
		<SignInModuleStyled>
			<Title size={36} text="Войти" />

			<Form onSubmit={submit} schema={{}}></Form>
		</SignInModuleStyled>
	)
}
