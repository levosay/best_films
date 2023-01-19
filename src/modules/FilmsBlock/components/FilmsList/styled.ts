import styled from 'styled-components'
import { breakpoints } from 'utils/constants'

export const FilmsListStyled = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 316px);
	gap: 16px;

	@media ${breakpoints.tabletMax} {
		grid-template-columns: repeat(3, 316px);
	}

	@media ${breakpoints.mobileMax} {
		grid-template-columns: repeat(1, auto);
		justify-items: center;
	}
`
