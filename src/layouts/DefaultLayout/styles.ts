import styled from 'styled-components'

export const LayoutContainer = styled.div`
  background-color: ${(props) => props.theme['gray-800']};
  max-width: 70rem;
  height: calc(100vh - 10rem);
  margin: 5rem auto;
  border-radius: 8px;
  padding: 2.5rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
`
