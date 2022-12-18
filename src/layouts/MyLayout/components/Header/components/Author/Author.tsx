import { FunctionComponent } from 'react'
import { ButtonControl, Icon } from 'components'
import { useAppSelector, userStore } from 'store'
import { IAuthorProps } from './Author.d'
import { AuthIcon, AuthorStyled } from './styled'

export const Author: FunctionComponent<IAuthorProps> = (): JSX.Element => {
	const { user } = useAppSelector(userStore)

	return (
		<AuthorStyled>
			{user ? (
				<AuthIcon>
					<ButtonControl
						as="a"
						href="/account"
						theme="outline"
						startIcon={<Icon id="user" />}
					/>
				</AuthIcon>
			) : (
				<>
					<ButtonControl as="a" href="/signin" theme="outline" title="Вход" />
					<ButtonControl
						as="a"
						href="/signup"
						theme="outline"
						title="Регистрация"
					/>
				</>
			)}
		</AuthorStyled>
	)
}
