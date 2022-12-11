import styled from 'styled-components'
import { ContainerStyled } from 'components/Container/styled'
import { breakpoints } from 'utils/constants'

export const FooterStyled = styled(ContainerStyled)`
	margin-top: auto;
	padding-top: 32px;
	padding-bottom: 32px;

	@media ${breakpoints.tabletMax} {
		padding-top: 24px;
		padding-bottom: 24px;
	}
`

export const ByLink = styled.a``
