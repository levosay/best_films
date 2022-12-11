import { FunctionComponent } from 'react'

import { IHintProps } from './Hint.d'

import { HintStyled } from './styled'

export const Hint: FunctionComponent<IHintProps> = ({
  isError,
  message,
  posAbsolute,
}): JSX.Element => {
  return (
    <HintStyled isError={isError} posAbsolute={posAbsolute}>
      {message}
    </HintStyled>
  )
}
