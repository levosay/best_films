import { FunctionComponent } from 'react'
import { Title } from 'components'
import { TFilmCardProps } from './FilmCard.d'
import {
	Details,
	FilmCardStyled,
	GenreItem,
	GenresWrapper,
	Poster,
	PosterImg,
} from './styled'

export const FilmCard: FunctionComponent<TFilmCardProps> = ({
	kinopoiskId,
	imdbId,
	nameRu,
	year,
	posterUrlPreview,
	posterUrl,
	ratingImdb,
	nameOriginal,
	genres,
	countries,
	type,
}): JSX.Element => {
	console.log('________________ ', {
		genres,
		countries,
		type,
	})

	const filmName = nameRu ?? nameOriginal

	const genresList = genres?.map((genre) => (
		<GenreItem key={genre.genre} type="span" size={12}>
			{genre.genre}
		</GenreItem>
	))

	return (
		<FilmCardStyled>
			{posterUrlPreview && (
				<Poster>
					<PosterImg
						src={posterUrlPreview}
						alt={`${nameRu}`}
						loading="lazy"
						fill
					/>
				</Poster>
			)}

			<Details>
				{filmName && <Title size={17} theme="white" text={filmName} />}
			</Details>
			{genresList && <GenresWrapper>{genresList}</GenresWrapper>}
		</FilmCardStyled>
	)
}
