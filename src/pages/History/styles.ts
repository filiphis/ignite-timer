import styled, { css } from 'styled-components'
/*
export const Wrapper = styled.div`
  ${({ theme }) => css`

  `}
`
*/

export const Title = styled.h1`
  ${({ theme }) => css`
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.xlarge};
    color: ${theme.colors['gray-100']};
    margin-bottom: ${theme.spacings.lowMedium};
    margin-top: 5rem;
  `}
`

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    flex: 1;
  `}
`

export const TableContainer = styled.div`
  ${({ theme }) => css`
    overflow: auto;
    flex: 1;

    table {
      width: 100%;
      min-width: 60rem;
      border-collapse: collapse;

      tr {
        background-color: ${theme.colors['gray-700']};
        transition: background-color linear 200ms;

        &:hover {
          background-color: ${theme.colors['gray-600']};
        }
      }

      thead {
        font-weight: ${theme.font.bold};
        font-size: ${theme.font.sizes.small};
        color: ${theme.colors['gray-100']};
        background-color: ${theme.colors['gray-600']};
      }

      th {
        padding: ${theme.spacings.small};
        text-align: left;

        &:first-child {
          border-top-left-radius: ${theme.border.radius};
          padding-left: 2.4rem;
        }
        &:last-child {
          border-top-right-radius: ${theme.border.radius};
          padding-right: 2.4rem;
        }
      }

      td {
        margin: ${theme.spacings.medium};
        border-top: 4px solid ${theme.colors['gray-800']};
        padding: ${theme.spacings.small};
        font-size: ${theme.font.sizes.small};
        color: ${theme.colors['gray-300']};

        &:first-child {
          padding-left: 2.4rem;
          width: 50%;
        }
        &:last-child {
          padding-right: 2.4rem;
        }
      }
    }
  `}
`

/* **********
    Componente estilicado recebendo propriedades e tipagem
********** */

const STATUS_COLORS = {
  green: 'green-500',
  yellow: 'yellow-500',
  red: 'red-500'
} as const

type StatusProps = {
  status: 'green' | 'yellow' | 'red'
}

export const StatusTask = styled.span<StatusProps>`
  ${({ theme, status }) => css`
    display: flex;
    align-items: center;
    gap: 0.8rem;
    &::before {
      content: '';
      width: 8px;
      height: 8px;
      border-radius: 50%;

      background-color: ${theme.colors[STATUS_COLORS[status]]};
    }
  `}
`
