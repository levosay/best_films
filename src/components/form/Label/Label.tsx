import { FunctionComponent, PropsWithChildren } from 'react'
import { Icon } from 'components'
import { ILabelProps } from './Label.d'
import { LabelStyled } from './styled'

export const Label: FunctionComponent<PropsWithChildren<ILabelProps>> = ({
  message,
  required,
  svg,
  children,
  ...props
}): JSX.Element => {
  return (
    <LabelStyled {...props}>
      {message}
      {children}
      {required && <Icon id={svg}/>}
    </LabelStyled>
  )
}
