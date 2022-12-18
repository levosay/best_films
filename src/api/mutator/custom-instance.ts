// import { isBrowser } from 'utils/constants'

// const serverURL = process.env.NEXT_PUBLIC_FILMS_API_URL_DEV
// const clientURL = process.env.NEXT_PUBLIC_FILMS_API_URL_PROD
// const baseURL = isBrowser ? clientURL : serverURL
const baseURL = process.env.NEXT_PUBLIC_FILMS_API_URL_DEV

export const customInstance = async <T>({
	url,
	method,
	params,
}: {
	url: string
	method: 'get'
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	params?: any
}): Promise<T> => {
	const customHeaders = new Headers()
	customHeaders.append('Accept', 'application/json, */*')
	customHeaders.append('X-API-KEY', `${process.env.NEXT_PUBLIC_FILMS_API_KEY}`)

	const fullUrl = params
		? `${baseURL}${url}` + `?` + new URLSearchParams(params)
		: `${baseURL}${url}`

	const response = await fetch(fullUrl, {
		method: method.toUpperCase(),
		headers: customHeaders,
	})

	const json = (await response.json()) as T

	if (!response.ok) {
		const { status } = response
		const withStatus = { ...json, status }
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
