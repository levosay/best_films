import { GetApiV22FilmsParams } from 'api/models'
import { filmsStore, useAppDispatch, useAppSelector } from 'store'
import { globalFilmsThunk } from 'store/films/globalFilms.thunk'

export const UseFilms = () => {
	const dispatch = useAppDispatch()
	const { films, detailed, isGlobalLoad, isContentLoad, isError } =
		useAppSelector(filmsStore)

	const getGlobalFilmsThunk = (params?: GetApiV22FilmsParams) =>
		dispatch(globalFilmsThunk({ params }))

	return {
		films,
		detailed,
		isGlobalLoad,
		isContentLoad,
		isError,
		getGlobalFilmsThunk,
	}
}
