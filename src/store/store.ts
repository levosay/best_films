import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from './user'

export const store = configureStore({
	reducer: {
		user: userReducer,
	},
})

export type Store = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
