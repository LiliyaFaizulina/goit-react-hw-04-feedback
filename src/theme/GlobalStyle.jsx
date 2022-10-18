import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
 html {
   box-sizing: border-box;
   width: 100vw;
   overflow-x: hidden;
  }
  
  *,
  *::before,
  *::after {
   box-sizing: inherit;
  }

body{
  font-family: 'Roboto', sans-serif;
  background-color: ${p => p.theme.bgColors.main};
}

`;
