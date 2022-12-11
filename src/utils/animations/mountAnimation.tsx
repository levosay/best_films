import { FunctionComponent } from 'react'
import { useTransition } from 'react-spring'
import { MountAnimationProps } from './animation.d'

export const MountAnimation: FunctionComponent<
  MountAnimationProps
> = ({ children, flag, config, Component }) => {
  const transitions = useTransition(flag, config)

  return transitions(
    (styles, item) =>
      item && <Component style={styles}>{children}</Component>
  )
}
