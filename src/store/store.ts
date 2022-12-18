import {
	configureStore,
	combineReducers,
	AnyAction,
	ThunkDispatch,
	CombinedState,
} from '@reduxjs/toolkit'
import { createWrapper, HYDRATE } from 'next-redux-wrapper'
import { filmsReducer, IFilmsState } from './films'
import { IUserState, userReducer } from './user'

const combineReducer = combineReducers({
	user: userReducer,
	films: filmsReducer,
})

const masterReducer = (
	state: CombinedState<{ user: IUserState; films: IFilmsState }> | undefined,
	action: AnyAction
) => {
	if (action.type === HYDRATE) {
		return {
			...state,
			...action.payload,
		}
	} else {
		return combineReducer(state, action)
	}
}

export const store = () =>
	configureStore({
		reducer: masterReducer,
	})

export const wrapper = createWrapper(store)

type Store = ReturnType<typeof store>
export type RootState = ReturnType<Store['getState']>
export type AppDispatch = Store['dispatch']
export type NextThunkDispatch = ThunkDispatch<RootState, void, AnyAction>
