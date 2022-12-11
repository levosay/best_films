import { Nullable } from 'types'

export interface IUser {
  name?: string
  email?: string
  password?: string
  uid?: string
}

export interface IUserState {
  user: Nullable<IUser>
  viewed: number[] | unknown[]
  watch: number[] | unknown[]
}
