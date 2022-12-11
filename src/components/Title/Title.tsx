import { FunctionComponent, PropsWithChildren } from 'react'
import { TitleStyled } from './styled'
import { ITitleProps } from './Title.d'

export const Title: FunctionComponent<PropsWithChildren<ITitleProps>> = ({
	children,
	size,
	text,
	...props
}): JSX.Element => {
	const chooseTypeTitle = () => {
		switch (size) {
			case 36:
				return 'h1'
			case 30:
				return 'h2'
			case 22:
				return 'h3'
			case 18:
				return 'h4'
			case 17:
				return 'h5'
			default:
				return 'h1'
		}
	}

	return (
		<TitleStyled as={chooseTypeTitle()} size={size} {...props}>
			{text}
			{children}
		</TitleStyled>
	)
}
