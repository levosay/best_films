import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FilmSearchByFiltersResponse } from 'api/models'
import { IFilmsState } from './films.slice.d'
// import { globalFilmsThunk } from './globalFilms.thunk'

const initialState: IFilmsState = {
	films: null,
	detailed: null,
	isError: null,
	isContentLoad: 'idle',
	isGlobalLoad: 'idle',
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
	// extraReducers: (builder) => {
	// 	builder
	// 		.addCase(globalFilmsThunk.pending, (state) => {
	// 			state.isGlobalLoad = 'pending'
	// 			state.isError = null
	// 		})
	// 		.addCase(globalFilmsThunk.fulfilled, (state, { payload }) => {
	// 			state.films = payload
	// 			state.isGlobalLoad = 'idle'
	// 			state.isError = null
	// 		})
	// 		.addCase(
	// 			globalFilmsThunk.rejected,
	// 			(
	// 				state,
	// 				// eslint-disable-next-line @typescript-eslint/no-explicit-any
	// 				{ payload }: PayloadAction<any>
	// 			) => {
	// 				state.isGlobalLoad = 'rejected'
	// 				state.isError = payload
	// 			}
	// 		)
	// },
})

export const { setFilms, resetError } = filmsSlice.actions
export const filmsReducer = filmsSlice.reducer
