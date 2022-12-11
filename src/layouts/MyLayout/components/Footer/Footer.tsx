import { FunctionComponent } from 'react'
import { ButtonControl, Icon } from 'components'
import { IFooterProps } from './Footer.d'
import { ByLink, FooterStyled } from './styled'

export const Footer: FunctionComponent<IFooterProps> = (): JSX.Element => {
	return (
		<FooterStyled>
			<ByLink href="mailto:ryuuzaki44l@gmail.com" type="mail">
				<ButtonControl
					as="button"
					theme="primary"
					title="Write to the Author"
					noFilled
					startIcon={<Icon id="mail" />}
				/>
			</ByLink>
		</FooterStyled>
	)
}
