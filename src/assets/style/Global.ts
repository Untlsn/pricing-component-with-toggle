import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::after, *::before {
    box-sizing: border-box;
  }
  
  body {
    font-family: Montserrat, sans-serif;
    font-weight: 700;
    margin: 0;
    min-height: 100vh;
    color: ${({ theme }) => theme.colors.darkGrayishBlue};
  }
  html {
    font-size: 15px;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyle;
