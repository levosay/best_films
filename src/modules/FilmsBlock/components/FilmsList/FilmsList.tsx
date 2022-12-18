import { FunctionComponent, useMemo } from 'react'
import { FilmCard } from './components'
import { IFilmsListProps } from './FilmsList.d'
import { FilmsListStyled } from './styled'

export const FilmsList: FunctionComponent<IFilmsListProps> = ({
	data,
}): JSX.Element => {
	const filmsList = useMemo(
		() => data.map((film) => <FilmCard key={film.kinopoiskId} {...film} />),
		[data]
	)

	return <FilmsListStyled>{filmsList}</FilmsListStyled>
}
