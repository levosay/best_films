import styled from 'styled-components'
import { breakpoints } from 'utils/constants'

export const ContainerStyled = styled.div`
	width: 100%;
	max-width: 1440px;
	padding-left: 64px;
	padding-right: 64px;
	margin: 0 auto;

	@media ${breakpoints.tabletMax} {
		padding-left: 32px;
		padding-right: 32px;
	}

	@media ${breakpoints.mobileMax} {
		padding-left: 16px;
		padding-right: 16px;
	}
`
