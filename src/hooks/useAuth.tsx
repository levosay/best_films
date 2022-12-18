import { setCookie } from 'cookies-next'
import { initializeApp } from 'firebase/app'
import {
	createUserWithEmailAndPassword,
	getAuth,
	signInWithEmailAndPassword,
} from 'firebase/auth'
import { getDatabase, onValue, ref, set } from 'firebase/database'
import { useRouter } from 'next/router'
import { useAppDispatch } from 'store'
import { setUser } from 'store/user'
import { HookFormValues } from 'types'

const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_BD_API_KEY,
	authDomain: 'best-films-base.firebaseapp.com',
	databaseURL: process.env.NEXT_PUBLIC_BD_DATABASE_URL,
	projectId: 'best-films-base',
	storageBucket: 'best-films-base.appspot.com',
	messagingSenderId: '462223000484',
	appId: process.env.NEXT_PUBLIC_BD_API_ID,
}

export const UseAuth = () => {
	const router = useRouter()
	const dispatch = useAppDispatch()
	const app = initializeApp(firebaseConfig)
	const auth = getAuth()
	const database = getDatabase(app)

	const createUser = ({ name, email, password }: HookFormValues) => {
		createUserWithEmailAndPassword(auth, email, password)
			.then(({ user }) => {
				const uid = user.uid
				const userRef = ref(database, `/users/${uid}`)
				const userDataBase = {
					name,
					email,
					password,
					uid,
				}
				const userStore = {
					name,
					email,
				}

				setCookie('TokenAuth', uid)
				set(userRef, userDataBase)
				dispatch(setUser(userStore))
				router.push('/')
			})
			.catch((error) => {
				console.log('error ', error)
			})
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
