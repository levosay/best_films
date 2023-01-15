import Image from 'next/future/image'
import styled from 'styled-components'
import { colors, Transition } from 'utils/constants'
import { Typography } from '../../../../../../components'

export const PosterImg = styled(Image)`
	transition: ${Transition.ms500};
`

export const Details = styled.div`
	position: absolute;
	left: 0;
	bottom: 0;
	width: 100%;
	padding: 20px;
	z-index: 2;
	transition: ${Transition.ms500};
`

export const GenresWrapper = styled.div`
	position: absolute;
	left: 0;
	bottom: 0;
	display: flex;
	flex-wrap: wrap;
	width: 100%;
`

export const GenreItem = styled(Typography)``

export const FilmCardStyled = styled.div`
	position: relative;
	width: 320px;
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
			bottom: 40px;
		}

		${GenresWrapper} {
			bottom: 10px;
		}
	}
`

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
