import Image from 'next/dist/client/image'
import { animated } from 'react-spring'
import styled, { css } from 'styled-components'
import { ContainerStyled } from 'components/Container/styled'
import { breakpoints, colors, Transition } from 'utils/constants'

interface IHeaderStyle {
	isActive: boolean
}

export const Wrapper = styled.div`
	position: relative;
`

export const HeaderStyled = styled(ContainerStyled)<IHeaderStyle>`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-top: 32px;
	padding-bottom: 32px;
	transition: all ${Transition.ms200};
	z-index: 1;

	@media ${breakpoints.tabletMax} {
		padding-top: 24px;
		padding-bottom: 24px;
	}

	${({ isActive }) =>
		isActive &&
		css`
			background-color: ${colors.white};
		`}
`

export const Logo = styled.div`
	display: flex;
	align-items: center;
	gap: 16px;
	transition: color ${Transition.ms300};
	cursor: pointer;

	@media (hover: hover) {
		&:hover {
			color: ${colors.primaryLight};
		}
	}
`

export const LogoImage = styled(Image)`
	position: relative;
	width: 56px;
	height: 56px;
`

export const MenuBurger = styled.div`
	@media ${breakpoints.tabletMin} {
		display: none;
	}
`

export const MenuAnimation = styled(animated.div)`
	position: absolute;
	left: 0;
	right: 0;
	height: calc(100vh - 104px);
	background-color: ${colors.black};
	z-index: 0;
`
