import { FunctionComponent } from 'react'
import { Preloader, Pagination } from 'components'
import { useFilms } from 'hooks'
import { FilmsList } from './components'
import { IFilmsBlockProps } from './FilmsBlock.d'
import { FilmsBlockStyled } from './styled'

export const FilmsBlockModule: FunctionComponent<
	IFilmsBlockProps
> = (): JSX.Element => {
	const { films, isContentLoad, getFilmsThunk } = useFilms()

	const moveCurrentPage = (selected: number) => {
		getFilmsThunk({ page: selected })
	}

	console.log('films_______ ', films)
	console.log('isContentLoad_______ ', isContentLoad)

	if (films) {
		return (
			<FilmsBlockStyled>
				<FilmsList data={films.items} />
				<Pagination
					pageCount={films.totalPages}
					onPageChange={({ selected }) => moveCurrentPage(selected + 1)}
				/>
			</FilmsBlockStyled>
		)
	}

	return <Preloader mode="fullscreen" />
}
