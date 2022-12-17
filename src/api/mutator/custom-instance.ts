import { PostAuthLogin200Data } from 'api/models'
import { CONFIG, isBrowser } from 'utils/constants'
import {
  getCookiesFromClient,
  getCookiesFromReq,
} from 'utils/helpers'
import { IErrorResponse } from 'api/response'

const serverURL = CONFIG.apiEndpointDev
const clientURL = CONFIG.apiEndpointProd
const baseURL = isBrowser ? clientURL : serverURL

export const customInstance = async <T>({
  url,
  method,
  params,
  data,
  headers,
  requestAuthToken,
}: {
  url: string
  method: 'get' | 'post' | 'put' | 'delete' | 'patch'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params?: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any
  responseType?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  headers?: any
  requestAuthToken?: string
}): Promise<T> => {
  const isFormData = isBrowser && data instanceof FormData

  const customHeaders = new Headers(headers)
  customHeaders.append('Accept', 'application/json, */*')

  const cookies =
    getCookiesFromClient<PostAuthLogin200Data>('authToken')
  const token = requestAuthToken ?? cookies?.token
  customHeaders.append('Authorization', `Bearer ${token}`)

  const fullUrl = params
    ? `${baseURL}${url}` + `?` + new URLSearchParams(params)
    : `${baseURL}${url}`

  const body = isFormData ? data : JSON.stringify(data)

  const response = await fetch(fullUrl, {
    method: method.toUpperCase(),
    headers: customHeaders,
    body,
  })

  const json = (await response.json()) as T

  if (!response.ok) {
    const { status } = response
    const concatMsg = Object.values(
      (json as IErrorResponse).errors as { [key: string]: unknown }
    )
      .flat()
      .join('')
    const withStatus = { ...json, status, message: concatMsg }
    const error = JSON.stringify(withStatus)
    throw new Error(error)
  }

  return json
}

export default customInstance

// In some case with react-query and swr you want to be able to override the return error type so you can also do it here like this
export type ErrorType<Error> = Error & TypeError
// In case you want to wrap the body type (optional)
// (if the custom instance is processing data before sending it, like changing the case for example)
export type BodyType<T> = T
