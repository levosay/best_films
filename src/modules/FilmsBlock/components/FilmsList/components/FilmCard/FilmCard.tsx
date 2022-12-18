import Image from 'next/future/image'
import { FunctionComponent } from 'react'
import { TFilmCardProps } from './FilmCard.d'
import { FilmCardStyled } from './styled'

export const FilmCard: FunctionComponent<TFilmCardProps> = ({
	kinopoiskId,
	imdbId,
	nameRu,
	year,
	posterUrlPreview,
	ratingImdb,
}): JSX.Element => {
	return (
		<FilmCardStyled>
			{posterUrlPreview && (
				<Image
					src={posterUrlPreview}
					width={200}
					height={300}
					alt={`${nameRu}`}
					loading="lazy"
				/>
			)}
		</FilmCardStyled>
	)
}
