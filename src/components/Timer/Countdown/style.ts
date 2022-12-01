import styled, { css } from 'styled-components'

export const CountdownContainer = styled.div`
  ${({ theme }) => css`
    font-family: ${theme.font.family['roboto-mono']};
    font-size: ${theme.font.sizes.countdown};
    font-weight: ${theme.font.bold};
    color: ${theme.colors['gray-100']};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: ${theme.spacings.small};

    span {
      border-radius: ${theme.border.radius};
      background-color: ${theme.colors['gray-700']};
      width: 12.8rem;
      height: 19.802rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `}
`

export const Separator = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors['green-500']};
  `}
`
