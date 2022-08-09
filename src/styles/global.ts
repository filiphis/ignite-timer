import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

  }

  html {
    font-size: 62.5%;
  }

  html, body {
    height: 100%;
  }

  ${({ theme }) => css`
    body {
      background-color: ${theme.colors['gray-900']};
      color: ${theme.colors['gray-100']};
    }
    body,
    input,
    textarea,
    button {
      font-family: ${theme.font.family.roboto};
      font-size: ${theme.font.sizes.medium};
      font-weight: ${theme.font.normal};
      font-display: swap;
    }
  `}
`
