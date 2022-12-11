import { FunctionComponent, PropsWithChildren } from 'react'
import { Footer, Header } from './components'
import { IMyLayoutProps } from './MyLayout.d'
import { Content, MyLayoutStyled } from './styled'

export const MyLayout: FunctionComponent<PropsWithChildren<IMyLayoutProps>> = ({
	children,
}): JSX.Element => {
	return (
		<MyLayoutStyled>
			<Header />
			<Content>{children}</Content>
			<Footer />
		</MyLayoutStyled>
	)
}
