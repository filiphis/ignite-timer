import styled, { css } from 'styled-components'

export const Header = styled.header`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: ${theme.spacings.xsmall};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.large};
    span {
      color: ${theme.colors['gray-100']};
      padding: 11px 0;
    }
  `}
`

export const BaseInput = styled.input`
  ${({ theme }) => css`
    color: ${theme.colors['gray-400']};
    background-color: ${theme.colors.transparent};
    border: none;
    border-bottom: 2px solid ${theme.colors['gray-500']};
    padding: 14px ${theme.spacings.xsmall};

    &:focus {
      box-shadow: none;
      outline: none;
      border-color: ${theme.colors['green-500']};
    }
  `}
`

export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`
export const MinutesInput = styled(BaseInput)`
  width: 6.4rem;
`
