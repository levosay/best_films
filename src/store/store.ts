import {
	configureStore,
	combineReducers,
	AnyAction,
	ThunkDispatch,
} from '@reduxjs/toolkit'
import { createWrapper, HYDRATE } from 'next-redux-wrapper'
import { filmsReducer } from './films'
import { userReducer } from './user'

const combineReducer = combineReducers({
	user: userReducer,
	films: filmsReducer,
})

const masterReducer = (state, action) => {
	if (action.type === HYDRATE) {
		const nextState = {
			...state, // use previous state
			...action.payload, // apply delta from hydration
		}
		if (state.count) nextState.count = state.count // preserve count value on client side navigation
		return nextState
	} else {
		return combineReducer(state, action)
	}
}

export const store = () =>
	configureStore({
		reducer: masterReducer,
	})

export const wrapper = createWrapper(store, { debug: true })

type Store = ReturnType<typeof store>
export type RootState = ReturnType<Store['getState']>
export type AppDispatch = Store['dispatch']
export type NextThunkDispatch = ThunkDispatch<RootState, void, AnyAction>
