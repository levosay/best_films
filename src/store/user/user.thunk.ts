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
			const { message } = error as Error
			const parsedError = JSON.parse(message)
			return rejectWithValue(parsedError)
		}
	}
)
