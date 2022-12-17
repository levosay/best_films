import { getCookie } from 'cookies-next'
import { ref, onValue } from 'firebase/database'
import { FunctionComponent, PropsWithChildren, useEffect } from 'react'
import { UseAuth } from 'hooks'
import { useAppDispatch } from 'store'
import { setUser } from 'store/user'

export const InitialProvider: FunctionComponent<PropsWithChildren> = ({
	children,
}): JSX.Element => {
	const { database } = UseAuth()
	const dispatch = useAppDispatch()

	useEffect(() => {
		const tokenAuth = getCookie('TokenAuth')
		if (!tokenAuth) return

		const userRef = ref(database, `/users/${tokenAuth}`)

		onValue(userRef, (snapshot) => {
			dispatch(setUser(snapshot.val()))
		})
	}, [])

	return <>{children}</>
}
