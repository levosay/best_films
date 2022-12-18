import styled, { css } from 'styled-components'
import { IPreloaderProps } from './Preloader.d'

type StyledPreloaderProps = Pick<
  IPreloaderProps,
  'mode' | 'backgroundColor' | 'opacity'
>

export const PreloaderContainer = styled.div<StyledPreloaderProps>`
  align-items: center;
  display: flex;
  justify-content: center;

  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    opacity: ${({ opacity }) => opacity};
    background-color: ${({ backgroundColor }) => backgroundColor};
    z-index: 1001;
  }

  ${(p) =>
    p.mode === 'fullscreen' &&
    css`
      height: 100vh;
      width: 100vw;
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 2000;

      &::before {
        position: fixed;
        top: 0;
        left: 0;
      }
    `}

  ${(p) =>
    p.mode === 'container' &&
    css`
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 1000;

      &::before {
        position: absolute;
      }
    `}
`
