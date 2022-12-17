// TO-DO enum HTTP Status
export interface IErrorResponse {
  message: string
  errors: unknown
  status: number
}

export interface Response<T> {
  data: T
}
