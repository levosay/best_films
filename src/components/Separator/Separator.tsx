import { FunctionComponent } from 'react'

import { ISeparatorProps } from './Separator.d'
import { SeparatorStyled, SeparatorStyledWithMargin } from './styled'

export const Separator: FunctionComponent<ISeparatorProps> = ({
  noMargin,
  margin = '32',
  color = 'white',
}): JSX.Element => {
  if (noMargin) {
    return <SeparatorStyled color={color} />
  }
  return <SeparatorStyledWithMargin color={color} margin={margin} />
}
