import Link from 'next/dist/client/link'
import { FunctionComponent } from 'react'
import { UseActiveLink } from 'hooks'
import { TMenuItemProps } from './MenuItem.d'
import { MenuItemStyled } from './styled'

export const MenuItem: FunctionComponent<TMenuItemProps> = (
	props
): JSX.Element => {
	const { active } = UseActiveLink(props.href)

	return (
		<Link {...props}>
			<MenuItemStyled active={active}>{props.title}</MenuItemStyled>
		</Link>
	)
}
