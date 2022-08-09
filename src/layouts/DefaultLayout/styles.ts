import styled from 'styled-components'

export const LayoutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const PagesContainer = styled.div`
  background-color: ${(props) => props.theme.colors['gray-800']};
  width: 77.77%;
  height: 74.4rem;
  /* margin: 8rem auto; */
  border-radius: ${(props) => props.theme.border.radius};
  padding: 4rem;
  display: flex;
  flex-direction: column;
`
