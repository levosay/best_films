import styled, { css } from 'styled-components'
import { IconStyled } from 'components/Icon/styled'
import { Transition, colors } from 'utils/constants'
import { TButtonProps } from './Button.d'

type TitleStyledProps = Pick<TButtonProps, 'fontWeight'>

type ButtonStyledProps = Pick<
	TButtonProps,
	'theme' | 'fontWeight' | 'fullWidth' | 'noFilled'
>

export const ButtonTitle = styled.span<TitleStyledProps>`
	padding: 0 8px;
	font-size: 17px;
	font-weight: ${({ fontWeight }) => fontWeight};
	transition: ${Transition.ms200};

	${({ fontWeight }) =>
		fontWeight === 500 &&
		css`
			line-height: 24px;
		`}
	${({ fontWeight }) =>
		fontWeight === 700 &&
		css`
			text-transform: uppercase;
			line-height: 18px;
		`}
`

export const ButtonStyled = styled.button<ButtonStyledProps>`
	display: grid;
	align-items: center;
	justify-items: center;
	justify-content: center;
	align-content: center;
	grid-auto-flow: column;
	gap: 4px;
	width: max-content;
	height: 48px;
	padding: 11px;
	border-radius: 99px;
	transition: ${Transition.ms200};
	border: 1px solid transparent;
	cursor: pointer;

	svg {
		flex: 0 0 auto;
	}

	&:active {
		background-color: ${colors.black};

		${ButtonTitle}, ${IconStyled} {
			opacity: 0.5;
		}
	}

	&:disabled {
		background-color: ${colors.grey};
		color: ${colors.greyDark};
		pointer-events: none;
	}

	${IconStyled} {
		margin: 4px;
	}

	${({ theme }) =>
		theme === 'primary' &&
		css`
			background-color: ${colors.primary};
			color: ${colors.black};

			@media (hover: hover) {
				&:hover {
					background-color: ${colors.primaryDark};
					color: ${colors.white};
				}
			}
		`}

	${({ theme }) =>
		theme === 'white' &&
		css`
			background-color: ${colors.white};
			color: ${colors.black};

			@media (hover: hover) {
				&:hover {
					background-color: ${colors.primary};
					color: ${colors.white};
				}
			}
		`}

  ${({ theme }) =>
		theme === 'black' &&
		css`
			background-color: ${colors.black};
			color: ${colors.white};

			@media (hover: hover) {
				&:hover {
					background-color: ${colors.primary};
					color: ${colors.white};
				}
			}
		`}

  ${({ theme }) =>
		theme === 'gray' &&
		css`
			background-color: ${colors.grey};
			color: ${colors.white};

			@media (hover: hover) {
				&:hover {
					background-color: ${colors.greyDark};
					color: ${colors.white};
				}
			}
		`}

  ${({ fullWidth }) =>
		fullWidth &&
		css`
			width: 100%;
		`}

  ${({ noFilled }) =>
		noFilled &&
		css`
			background-color: transparent;

			&:hover {
				background-color: transparent;
			}
		`}
`
