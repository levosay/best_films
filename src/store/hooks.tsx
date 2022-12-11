import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { IUserState } from 'store/user/user.slice.d'
import { AppDispatch, Store } from './store'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<Store> = useSelector
export const userStore = (state: Store): IUserState => state.user
