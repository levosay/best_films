import { ReactNode, ElementType } from 'react'
import { AnimatedComponent, UseTransitionProps } from 'react-spring'
import { StyledComponent } from 'styled-components'

export interface MountAnimationProps {
  children?: ReactNode
  flag: boolean
  config: UseTransitionProps
  Component: StyledComponent<
    AnimatedComponent<ElementType<unknown>>,
    Record<string, unknown>,
    Record<string, unknown>,
    never
  >
}
