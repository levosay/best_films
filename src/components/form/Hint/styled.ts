import styled, { css } from 'styled-components'
import { colors } from 'utils/constants'
import { IHintProps } from './Hint.d'

type HintStyledProps = Pick<IHintProps, 'isError' | 'posAbsolute'>

export const HintStyled = styled.span<HintStyledProps>`
	display: block;
	color: ${colors.blueDark};
	font-weight: 440;
	font-size: 12px;
	line-height: 16px;

	${(p) =>
		p.isError &&
		css`
			color: ${colors.red};
		`}

	${(p) =>
		p.posAbsolute
			? css`
					position: absolute;
					top: calc(100% + 6px);
			  `
			: css`
					margin-top: 8px;
			  `}
`
