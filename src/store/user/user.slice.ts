import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUserState, IUser } from './user.slice.d'
import { createUserThink } from './user.thunk'

const initialState: IUserState = {
	user: null,
	viewed: [],
	watch: [],
	isError: null,
	isGlobalLoad: 'idle',
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
	extraReducers: (builder) => {
		builder
			.addCase(createUserThink.pending, (state) => {
				state.isGlobalLoad = 'pending'
				state.isError = null
			})
			.addCase(createUserThink.fulfilled, (state) => {
				state.isGlobalLoad = 'idle'
				state.isError = null
			})
			.addCase(
				createUserThink.rejected,
				(
					state,
					// eslint-disable-next-line @typescript-eslint/no-explicit-any
					{ payload }: PayloadAction<any>
				) => {
					state.isGlobalLoad = 'rejected'
					state.isError = payload
				}
			)
	},
})

export const { setUser, setViewed, setWatch } = userSlice.actions
export const userReducer = userSlice.reducer
