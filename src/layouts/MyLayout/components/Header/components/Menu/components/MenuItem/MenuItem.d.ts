import { LinkProps } from 'next/dist/client/link'

export type TMenuItemProps = Omit<LinkProps, 'as'> & {
	as?: 'a'
	href: string
	title: string
}
