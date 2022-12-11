import { getCookie } from 'cookies-next'
import { initializeApp } from 'firebase/app'
import { getAuth, signInWithCustomToken } from 'firebase/auth'
import { FunctionComponent, PropsWithChildren, useEffect } from 'react'
import { useAppDispatch } from 'store'
import { setUser } from 'store/user'

const firebaseConfig = {
	apiKey: 'AIzaSyDz1aH0kzBRdGkHhiYGDuJLJghuD1YOb9M',
	authDomain: 'best-films-base.firebaseapp.com',
	databaseURL:
		'https://best-films-base-default-rtdb.europe-west1.firebasedatabase.app',
	projectId: 'best-films-base',
	storageBucket: 'best-films-base.appspot.com',
	messagingSenderId: '462223000484',
	appId: '1:462223000484:web:76e6b64ca2c497516b7731',
}

const app = initializeApp(firebaseConfig)

export const InitialProvider: FunctionComponent<PropsWithChildren> = ({
	children,
}): JSX.Element => {
	const dispatch = useAppDispatch()
	const auth = getAuth()

	useEffect(() => {
		const tokenAuth = getCookie('TokenAuth')

		// console.log('auth_____ ', auth)
		// signInWithCustomToken(auth, tokenAuth).then((data) => {
		// 	console.log('че тут ааа___ ', data)
		// })

		// if (!user) return
		// if (user) dispatch(setUser(user))
	}, [])

	return <>{children}</>
}
