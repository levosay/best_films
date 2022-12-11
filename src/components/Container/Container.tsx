import { FunctionComponent, PropsWithChildren } from 'react'
import { IContainerProps } from './Container.d'
import { ContainerStyled } from './styled'

export const Container: FunctionComponent<
	PropsWithChildren<IContainerProps>
> = ({ children }): JSX.Element => {
	return <ContainerStyled>{children}</ContainerStyled>
}
