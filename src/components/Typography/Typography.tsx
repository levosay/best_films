import { FunctionComponent, PropsWithChildren } from 'react'
import { TypographyStyled } from './styled'
import { ITypographyProps } from './Typography.d'

export const Typography: FunctionComponent<
  PropsWithChildren<ITypographyProps>
> = ({
  size,
  type = 'p',
  fontWeight = 400,
  children,
}): JSX.Element => {
  return (
    <TypographyStyled as={type} size={size} fontWeight={fontWeight}>
      {children}
    </TypographyStyled>
  )
}
