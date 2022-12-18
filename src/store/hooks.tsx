import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from 'store'
import { IFilmsState } from 'store/films'
import { IUserState } from 'store/user'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const userStore = (state: RootState): IUserState => state.user
export const filmsStore = (state: RootState): IFilmsState => state.films
