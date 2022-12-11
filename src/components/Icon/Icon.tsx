import { FunctionComponent } from 'react'
import { IIconProps } from './Icon.d'
import { IconStyled } from './styled'

export const Icon: FunctionComponent<IIconProps> = ({
  id,
  width = 16,
  height = 16,
}): JSX.Element => {
  return (
    <IconStyled width={width} height={height}>
      <use xlinkHref={`/images/symbol/svg/sprite.css.svg#${id}`} />
    </IconStyled>
  )
}
