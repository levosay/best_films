import { Nullable, TLoadStatuses } from 'types'

export interface IUser {
  name?: string
  email?: string
  password?: string
  uid?: string
}

type THistoryState = number[] | unknown[]

export interface IUserState {
  user: Nullable<IUser>
  viewed: THistoryState
  watch: THistoryState
  isError: null
  isGlobalLoad: TLoadStatuses
}
