import styled, { css } from 'styled-components'
import { colors, Transition } from 'utils/constants'
import { IInputProps } from './Input.d'

interface StyledProps extends Pick<IInputProps, 'disabled'> {
	isError?: boolean
}

export const InputContainer = styled.div`
	width: 100%;
	position: relative;
`
export const InputWrapper = styled.div`
	position: relative;
`

export const EndComponent = styled.div`
	position: absolute;
	display: flex;
	align-items: center;
	bottom: 0;
	right: 20px;
	height: 100%;
`

export const InputStyled = styled.input<StyledProps>`
	border-radius: 16px;
	padding: 12px 16px;
	width: 100%;
	transition: ${Transition.ms200};
	background-color: ${colors.grey};
	color: ${colors.greyDark};
	caret-color: ${colors.primaryDark};
	font-size: 17px;
	line-height: 24px;
	font-weight: 440;

	&::placeholder {
		color: ${colors.primary};
	}

	&:hover {
		box-shadow: inset ${colors.primaryLight} 0 0 0 1px;
	}

	&:focus {
		background-color: ${colors.white};
		box-shadow: inset ${colors.primaryLight} 0 0 0 1px;
	}

	${(p) =>
		p.disabled &&
		css`
			pointer-events: none;
			color: ${colors.greyDark};
			box-shadow: inset ${colors.grey} 0 0 0 1px;
			background-color: ${colors.white};
		`}

	${(p) =>
		p.isError &&
		css`
			color: ${colors.red};
			box-shadow: inset ${colors.red} 0 0 0 1px;

			&:hover {
				box-shadow: inset ${colors.red} 0 0 0 1px;
			}
		`}
`
