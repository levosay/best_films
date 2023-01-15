import styled from 'styled-components'
import { breakpoints } from 'utils/constants'
import { ITypographyProps, TSize } from './Typography.d'

const calculateSize = (size: TSize): string => {
	switch (size) {
		case 26:
			return `font-size: 26px;
              line-height: 32px;
              @media ${breakpoints.tabletMax} {
                font-size: 22px;
                line-height: 28px;
              }`
		case 17:
			return `font-size: 17px;
              line-height: 24px;`
		case 14:
			return `font-size: 14px;
              line-height: 20px;`
		case 12:
			return `font-size: 12px;
              line-height: 16px;`
		case 11:
			return `font-size: 11px;
              line-height: 12px;`
		default:
			return ''
	}
}

export const TypographyStyled = styled.div<ITypographyProps>`
	font-weight: ${({ fontWeight }) => fontWeight};
	${({ size }) => size && calculateSize(size)}
`
