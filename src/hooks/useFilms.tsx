import { GetApiV22FilmsParams } from 'api/models'
import { filmsStore, useAppDispatch, useAppSelector } from 'store'
import { filmsThunk } from 'store/films'

export const UseFilms = () => {
	const dispatch = useAppDispatch()
	const { films, detailed, isContentLoad, isError } = useAppSelector(filmsStore)

	const getFilmsThunk = (params: GetApiV22FilmsParams) =>
		dispatch(filmsThunk(params))

	return {
		films,
		detailed,
		isContentLoad,
		isError,
		getFilmsThunk,
	}
}
