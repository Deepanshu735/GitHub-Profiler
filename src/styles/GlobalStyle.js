import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    color-scheme: dark;
    font-family: ${({ theme }) => theme.typography.fontFamily};
    line-height: 1.5;
    font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.background};
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    min-height: 100vh;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
  }

  button,
  input {
    font: inherit;gi
  }

  #root {
    min-height: 100vh;
  }

  img {
    display: block;
    max-width: 100%;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyle;
