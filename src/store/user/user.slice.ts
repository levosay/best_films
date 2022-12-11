import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUserState, IUser } from './user.slice.d'

const initialState: IUserState = {
	user: null,
	viewed: [],
	watch: [],
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, { payload }: PayloadAction<IUser>) => {
			state.user = { ...state.user, ...payload }
		},
		setViewed: (state, { payload }: PayloadAction<number>) => {
			state.viewed = [...state.viewed, payload]
		},
		setWatch: (state, { payload }: PayloadAction<number>) => {
			state.watch = [...state.watch, payload]
		},
	},
	// extraReducers: (builder) => {
	// 	builder.addCase()
	// },
})

export const { setUser, setViewed, setWatch } = userSlice.actions
export const userReducer = userSlice.reducer
