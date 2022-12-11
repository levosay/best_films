export type Nullable<T> = T | null

// LOAD STATUS
export enum Statuses {
	idle = 'idle',
	pending = 'pending',
	rejected = 'rejected',
}

export type TLoadStatuses = `${Statuses}`
