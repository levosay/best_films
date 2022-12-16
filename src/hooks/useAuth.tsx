import { setCookie } from 'cookies-next'
import { initializeApp } from 'firebase/app'
import {
	createUserWithEmailAndPassword,
	getAuth,
	signInWithEmailAndPassword,
} from 'firebase/auth'
import { getDatabase, onValue, ref, set } from 'firebase/database'
import { useRouter } from 'next/router'
import { useAppDispatch, useAppSelector, userStore } from 'store'
import { createUserThink, setUser } from 'store/user'
import { HookFormValues } from 'types'

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

export const UseAuth = () => {
	const router = useRouter()
	const dispatch = useAppDispatch()
	const app = initializeApp(firebaseConfig)
	const auth = getAuth()
	const database = getDatabase(app)

	const createUser = ({ name, email, password }: HookFormValues) => {
		dispatch(createUserThink({ auth, email, password }))
		// .then(({ user }) => {
		// 	const uid = user.uid
		// 	const userRef = ref(database, `/users/${uid}`)
		// 	const userDataBase = {
		// 		name,
		// 		email,
		// 		password,
		// 		uid,
		// 	}
		// 	const userStore = {
		// 		name,
		// 		email,
		// 	}
		//
		// 	setCookie('TokenAuth', uid)
		// 	set(userRef, userDataBase)
		// 	dispatch(setUser(userStore))
		// 	router.push('/')
		// })
		// .catch((error) => {
		// 	console.log('error ', error)
		// })
	}

	const loginUser = ({ email, password }: HookFormValues) => {
		signInWithEmailAndPassword(auth, email, password)
			.then(({ user }) => {
				const uid = user.uid
				const userRef = ref(database, `/users/${uid}`)

				setCookie('TokenAuth', uid)
				onValue(userRef, (snapshot) => {
					dispatch(setUser(snapshot.val()))
				})
			})
			.catch((error) => {
				console.log('error ', error)
			})
	}

	return {
		app,
		auth,
		database,
		createUser,
		loginUser,
	}
}
