import { Nullable } from 'types'

export interface IUser {
  name?: string
  mail?: string
}

export interface IUserState {
  user: Nullable<IUser>
  viewed: number[] | unknown[]
  watch: number[] | unknown[]
}
