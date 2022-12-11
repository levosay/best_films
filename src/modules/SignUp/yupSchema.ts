import * as yup from 'yup'
import { passWithoutSpaces, ValidationPhrase } from 'utils/constants'

export const YupSchema = yup.object().shape({
	name: yup
		.string()
		.required(ValidationPhrase.required)
		.min(6, `${ValidationPhrase.minLength} 6 символов`),
	email: yup
		.string()
		.email(ValidationPhrase.email)
		.required(ValidationPhrase.required),
	password: yup
		.string()
		.min(6, `${ValidationPhrase.minLength} 6 символов`)
		.matches(passWithoutSpaces, ValidationPhrase.onlyLetters)
		.required(ValidationPhrase.required),
	// repeatPassword: yup
	// 	.string()
	// 	.min(6, `${ValidationPhrase.minLength} 6 символов`)
	// 	.matches(passWithoutSpaces, ValidationPhrase.onlyLetters)
	// 	.required(ValidationPhrase.required),
})
