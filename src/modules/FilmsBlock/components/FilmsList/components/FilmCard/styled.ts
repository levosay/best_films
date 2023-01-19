import Image from 'next/future/image'
import styled, { css } from 'styled-components'
import { Title } from 'components'
import { TypographyStyled } from 'components/Typography/styled'
import { breakpoints, colors, Transition } from 'utils/constants'

interface IAchievementsStyle {
	type: 'genre' | 'country'
}

const getAchievementsThem = ({ type }: IAchievementsStyle) => {
	switch (type) {
		case 'genre':
			return css`
				background-color: ${colors.yellowDark};
			`
		case 'country':
			return css`
				background-color: ${colors.red};
			`
	}
}

export const Poster = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	overflow: hidden;

	&:before {
		content: '';
		position: absolute;
		bottom: -180px;
		width: 100%;
		height: 100%;
		background: linear-gradient(0deg, ${colors.primaryDark} 50%, transparent);
		transition: ${Transition.ms500};
		z-index: 1;
	}
`

export const PosterImg = styled(Image)`
	transition: ${Transition.ms500};
`

export const PosterTitle = styled(Title)`
	position: absolute;
	left: 0;
	bottom: 60px;
	width: 100%;
	padding: 0 20px;
	transition: ${Transition.ms500};
	z-index: 2;
`

export const Details = styled.div`
	position: absolute;
	left: 0;
	text-align: center;
	bottom: -40%;
	display: flex;
	flex-direction: column;
	gap: 8px;
	width: 100%;
	padding: 20px;
	transition: ${Transition.ms500};
	z-index: 2;
`

export const Achievements = styled.div<IAchievementsStyle>`
	display: flex;
	align-items: start;
	flex-wrap: wrap;
	gap: 8px;
	width: 100%;

	${TypographyStyled} {
		padding: 2px 5px;
		border-radius: 4px;
		color: ${colors.white};
		text-transform: uppercase;
		${({ type }) => getAchievementsThem({ type })};
	}
`

export const Rating = styled.div`
	opacity: 0;
	position: absolute;
	top: 50px;
	right: 0;
	padding: 16px;
	border-radius: 0 20px;
	color: ${colors.white};
	font-weight: 700;
	transition: all ${Transition.ms500};
	z-index: 2;
`

export const FilmCardStyled = styled.div`
	position: relative;
	width: 316px;
	height: 450px;
	border-radius: 20px;
	box-shadow: 0 15px 35px rgba(0, 0, 0, 0.25);
	overflow: hidden;
	cursor: pointer;

	&:hover {
		&::before {
			bottom: 0;
		}

		${PosterImg} {
			transform: translateY(-50px);
			filter: blur(5px);
		}

		${Details} {
			bottom: 0;
		}

		${PosterTitle} {
			bottom: 140px;
		}

		${Rating} {
			top: 0;
			opacity: 1;
			background-color: ${colors.primaryLight};
		}
	}

	@media ${breakpoints.mobileMax} {
		width: 100%;
		max-width: 340px;
	}
`
