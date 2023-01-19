import { FunctionComponent } from 'react'
import { Typography } from 'components'
import { TFilmCardProps } from './FilmCard.d'
import {
	Achievements,
	Details,
	FilmCardStyled,
	Poster,
	PosterImg,
	PosterTitle,
	Rating,
} from './styled'

export const FilmCard: FunctionComponent<TFilmCardProps> = ({
	kinopoiskId,
	imdbId,
	nameRu,
	year,
	posterUrlPreview,
	posterUrl,
	ratingImdb,
	ratingKinopoisk,
	nameOriginal,
	genres,
	countries,
	type,
}): JSX.Element => {
	const filmName = nameRu ?? nameOriginal

	const genresList = genres?.map((genre) => (
		<Typography key={genre.genre} type="span" size={12}>
			{genre.genre}
		</Typography>
	))

	const countriesList = countries?.map((country) => (
		<Typography key={country.country} type="span" size={12}>
			{country.country}
		</Typography>
	))

	return (
		<FilmCardStyled>
			{posterUrlPreview && (
				<Poster>
					<PosterImg
						src={posterUrlPreview}
						alt={filmName ?? 'Film'}
						loading="lazy"
						fill
					/>
				</Poster>
			)}

			<Rating>
				<Typography type="span" size={17}>
					{ratingKinopoisk}
				</Typography>
			</Rating>
			{filmName && <PosterTitle size={30} theme="white" text={filmName} />}
			<Details>
				{countriesList && (
					<Achievements type="country">{countriesList}</Achievements>
				)}
				{genresList && <Achievements type="genre">{genresList}</Achievements>}
			</Details>
		</FilmCardStyled>
	)
}
