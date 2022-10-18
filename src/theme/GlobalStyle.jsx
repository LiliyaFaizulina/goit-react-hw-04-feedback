import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*,
::after,
::before {
  box-sizing: border-box;
}

body{
  font-family: 'Roboto', sans-serif;
  background-color: ${p=>p.theme.bgColors.main};
}

`;