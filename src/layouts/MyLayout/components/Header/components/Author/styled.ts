import styled from 'styled-components'
import { ButtonStyled } from 'components/buttons/ButtonControl/styled'
import { breakpoints } from 'utils/constants'

export const AuthorStyled = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
	text-transform: uppercase;

	@media ${breakpoints.tabletMax} {
		display: none;
	}
`

export const AuthIcon = styled.div`
	${ButtonStyled} {
		width: 66px;
	}
`
