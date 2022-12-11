export interface HookFormValues {
	email: string
	password: string
	repeatPassword: string
	name: string
}

export type TInputName = keyof HookFormValues

export interface IHookFormProps {
	inputFormName: TInputName
}

export interface IBaseInputProps {
	hookFormProps: IHookFormProps
	labelMessage?: string
	hintMessage?: string
	disabled?: boolean
}
