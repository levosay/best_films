import styled, { css } from 'styled-components'
import { colors, Transition } from 'utils/constants'

interface IActiveMenuItem {
	active: boolean
}

export const MenuItemStyled = styled.div<IActiveMenuItem>`
	padding: 12px 8px;
	font-size: 24px;
	text-transform: uppercase;
	border-bottom: 2px solid transparent;
	transition: all ${Transition.ms200};
	cursor: pointer;

	${({ active }) =>
		active &&
		css`
			color: ${colors.primary};
			border-bottom: 2px solid ${colors.primary};
		`}
	&:hover {
		color: ${colors.primaryLight};
		border-bottom: 2px solid ${colors.primaryLight};
	}
`
