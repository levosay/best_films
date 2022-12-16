import { Auth, AuthError, User } from '@firebase/auth'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { createUserWithEmailAndPassword } from 'firebase/auth'

interface ICreateUserProps {
	auth: Auth
	email: string
	password: string
}

export const createUserThink = createAsyncThunk<User, ICreateUserProps>(
	'create/user',
	async ({ auth, email, password }, { rejectWithValue }) => {
		try {
			const user = await createUserWithEmailAndPassword(auth, email, password)

			return {
				user,
			}
		} catch (error) {
			const { customData } = error as AuthError

			console.log('customData_________ ', customData)
			const parsedError = JSON.parse(customData._tokenResponse.error.message)
			return rejectWithValue(parsedError)
		}
	}
)
