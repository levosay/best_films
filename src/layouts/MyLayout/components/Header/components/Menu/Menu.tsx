import { FunctionComponent } from 'react'
import { MenuItem } from './components'
import { IMenuProps } from './Menu.d'
import { MenuStyled } from './styled'

export const Menu: FunctionComponent<IMenuProps> = ({
	mobile = false,
}): JSX.Element => {
	return (
		<MenuStyled mobile={mobile}>
			<MenuItem title="home" href="/" />
			<MenuItem title="films" href="/films" />
			<MenuItem title="anime" href="/anime" />
		</MenuStyled>
	)
}
