import { css } from 'styled-components'

export const media = {
  sp: (...args) => css`
    @media (max-width: 768px) {
      ${ css(...args) }
    }
  `,
  over_sp: (...args) => css`
    @media (min-width: 769px) {
      ${ css(...args) }
    }
  `
}
