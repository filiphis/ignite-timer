import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`

export const TimerContainer = styled.div`
  ${({ theme }) => css`
    max-width: 65.6rem;
    height: 42.4rem;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
  `}
`
