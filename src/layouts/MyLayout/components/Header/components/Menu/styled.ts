import styled, { css } from 'styled-components'
import { breakpoints } from 'utils/constants'
import { IMenuProps } from './Menu.d'

export const MenuStyled = styled.div<IMenuProps>`
	display: flex;
	gap: 8px;

	@media ${breakpoints.tabletMax} {
		display: none;
	}

	${({ mobile }) =>
		mobile &&
		css`
			display: none;

			@media ${breakpoints.tabletMax} {
				display: flex;
				flex-direction: column;
			}
		`}
`
