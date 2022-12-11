import { FunctionComponent } from 'react'
import { Icon } from 'components'
import { IPasswordExtensionProps } from './PasswordExtension.d'
import { PasswordExtensionStyled } from './styled'

export const PasswordExtension: FunctionComponent<IPasswordExtensionProps> = ({
	type,
	onClick,
}): JSX.Element => {
	return (
		<PasswordExtensionStyled onClick={onClick}>
			<Icon id={type === 'password' ? 'eye-open' : 'eye-close'} />
		</PasswordExtensionStyled>
	)
}
