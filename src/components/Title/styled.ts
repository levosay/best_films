import styled, { css } from 'styled-components'
import { breakpoints, colors } from 'utils/constants'
import { ITitleProps, TSize } from './Title.d'

const calculateSize = (size: TSize): string => {
	switch (size) {
		case 36:
			return `font-size: 36px;
              line-height: 40px;
              font-weight: 700;
              
              @media ${breakpoints.mobileMax} {
                font-size: 28px;
                line-height: 32px;
              }`
		case 30:
			return `font-size: 30px;
              line-height: 32px;
              font-weight: 600;
              
              @media ${breakpoints.mobileMax} {
                font-size: 24px;
                line-height: 28px;
              }`
		case 22:
			return `font-size: 22px;
              line-height: 24px;
              font-weight: 600;`
		case 18:
			return `font-size: 18px;
              line-height: 20px;
              font-weight: 600;`
		case 17:
			return `font-size: 17px;
              line-height: 18px;
              font-weight: 600;`
		default:
			return ''
	}
}

type TitleStyledProps = Partial<ITitleProps>

export const TitleStyled = styled.div<TitleStyledProps>`
	${({ size }) => size && calculateSize(size)}
	${({ uppercase }) =>
		uppercase &&
		css`
			text-transform: uppercase;
		`}

  ${({ theme }) =>
		theme === 'primary-base' &&
		css`
			color: ${colors.primary};
		`}

  ${({ theme }) =>
		theme === 'primary-dark' &&
		css`
			color: ${colors.primaryDark};
		`}


  ${({ theme }) =>
		theme === 'black' &&
		css`
			color: ${colors.black};
		`}

  ${({ theme }) =>
		theme === 'white' &&
		css`
			color: ${colors.white};
		`}
`
