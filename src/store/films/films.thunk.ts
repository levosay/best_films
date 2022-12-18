import { createAsyncThunk } from '@reduxjs/toolkit'
import { FilmSearchByFiltersResponse, GetApiV22FilmsParams } from 'api/models'
import { getApiV22Films } from 'api/service/films/films'

export const filmsThunk = createAsyncThunk<
	FilmSearchByFiltersResponse,
	GetApiV22FilmsParams
>('films/thunk', async (params, { rejectWithValue }) => {
	try {
		return await getApiV22Films(params)
	} catch (error) {
		const { message } = error as Error
		const parsedError = JSON.parse(message)
		return rejectWithValue(parsedError)
	}
})
