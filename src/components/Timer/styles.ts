import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 42.4rem;
  }
`

// export const TimerContainer = styled.span`
//   ${() => css``}
// `

export const baseButton = styled.button`
  ${({ theme }) => css`
    padding: ${theme.spacings.small};
    border: none;
    border-radius: ${theme.border.radius};

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;

    font-weight: ${theme.font.bold};
    transition: background-color 300ms ease;
    &:hover:not(:disabled) {
      cursor: pointer;
    }
  `}
`

export const StartCycleButton = styled(baseButton)`
  ${({ theme }) => css`
    background-color: ${theme.colors['green-500']};
    color: ${theme.colors['gray-100']};
    &:hover:not(:disabled) {
      background-color: ${theme.colors['green-700']};
    }

    &:disabled {
      background-color: ${theme.colors['green-700']};
      opacity: 0.7;
      cursor: not-allowed;
    }
  `}
`
export const InterruptCycleButton = styled(baseButton)`
  ${({ theme }) => css`
    background-color: ${theme.colors['red-500']};
    color: ${theme.colors['gray-100']};
    &:hover:not(:disabled) {
      background-color: ${theme.colors['red-700']};
    }
  `}
`
