import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FilmSearchByFiltersResponse } from 'api/models'
import { IFilmsState } from './films.slice.d'
import { filmsThunk } from './films.thunk'

const initialState: IFilmsState = {
	films: null,
	detailed: null,
	isError: null,
	isContentLoad: 'idle',
}

export const filmsSlice = createSlice({
	name: 'films',
	initialState,
	reducers: {
		setFilms: (
			state,
			{ payload }: PayloadAction<FilmSearchByFiltersResponse>
		) => {
			state.films = payload
		},
		resetError: (state) => {
			state.isError = initialState.isError
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(filmsThunk.pending, (state) => {
				state.isContentLoad = 'pending'
				state.isError = null
			})
			.addCase(filmsThunk.fulfilled, (state, { payload }) => {
				state.films = payload
				state.isContentLoad = 'idle'
				state.isError = null
			})
			.addCase(
				filmsThunk.rejected,
				(
					state,
					// eslint-disable-next-line @typescript-eslint/no-explicit-any
					{ payload }: PayloadAction<any>
				) => {
					state.isContentLoad = 'rejected'
					state.isError = payload
				}
			)
	},
})

export const { setFilms, resetError } = filmsSlice.actions
export const filmsReducer = filmsSlice.reducer
