import styled, { css } from 'styled-components'

export const HeaderContainer = styled.header`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    nav {
      display: flex;
      gap: 1.31rem;
      align-items: center;

      a {
        width: 4.8rem;
        height: 4.8rem;
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${theme.colors['gray-100']};
        padding: 0.3rem 0;
        border-bottom: 0.3rem solid transparent;
        border-top: 0.3rem solid transparent;
        transition: border 200ms, color 300ms;

        &:hover {
          border-bottom: 0.3rem solid ${theme.colors['green-500']};
        }

        &.active {
          color: ${theme.colors['green-500']};
        }
      }
    }
  `}
`
