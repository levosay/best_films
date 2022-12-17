import { FunctionComponent } from 'react'
import { ButtonControl } from 'components'
import { useAppSelector, userStore } from 'store'
import { IAuthorProps } from './Author.d'
import { AuthorStyled } from './styled'

export const Author: FunctionComponent<IAuthorProps> = (): JSX.Element => {
	const { user } = useAppSelector(userStore)
	const nameIcon = user?.name && user?.name[0]

	console.log('user____ ', user)

	return (
		<AuthorStyled>
			<ButtonControl as="a" href="/account" title={nameIcon} />
		</AuthorStyled>
	)
}
