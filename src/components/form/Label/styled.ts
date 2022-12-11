import styled, { css } from 'styled-components'
import { IconStyled } from 'components/Icon/styled'
import { colors } from 'utils/constants'
import { ILabelProps } from './Label.d'

type LabelStyledProps = Pick<ILabelProps, 'required'>

export const LabelStyled = styled.label<LabelStyledProps>`
	display: flex;
	align-items: center;
	position: relative;
	margin-bottom: 4px;
	font-weight: 700;
	font-size: 14px;
	line-height: 20px;
	color: ${colors.black};

	${(p) =>
		p.required &&
		css`
			${IconStyled} {
				color: ${colors.red};
			}
		`}
`
