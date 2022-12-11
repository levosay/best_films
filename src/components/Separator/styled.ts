import styled, { css } from 'styled-components'
import { breakpoints, colors } from 'utils/constants'
import { hexToRGB } from 'utils/helpers'
import { ISeparatorProps } from './Separator.d'

type SeparatorStyledProps = Pick<ISeparatorProps, 'color' | 'margin'>

export const SeparatorStyled = styled.hr<SeparatorStyledProps>`
	height: 1px;
	border: none;
	display: block;

	${(p) =>
		p.color === 'white' &&
		css`
			background: ${hexToRGB(colors.white, 0.2)};
		`}

	${(p) =>
		p.color === 'grey' &&
		css`
			background: ${colors.grey};
		`}
`

export const SeparatorStyledWithMargin = styled(SeparatorStyled)`
	&:not(:first-child) {
		margin-top: ${(p) => p.margin}px;
	}

	&:not(:last-child) {
		margin-bottom: ${(p) => p.margin}px;
	}

	@media ${breakpoints.mobileMax} {
		&:not(:first-child) {
			margin-top: 24px;
		}

		&:not(:last-child) {
			margin-bottom: 24px;
		}
	}
`
