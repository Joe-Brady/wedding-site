import { createGlobalStyle } from "styled-components";
import normalizeCSS from "./normalize-css";
import Bitter from "./fonts/Bitter.ttf";

const GlobalStyles = createGlobalStyle`
  ${normalizeCSS};

  @font-face {
    font-family: 'Bitter';
    src: url(${Bitter}) format('ttf');
  }

  html, body {
    font-family: 'Bitter', sans-serif;
    font-weight: 400;
    color: ${({ theme }) => theme.dark};
    background-color: ${({ theme }) => theme.light};
  }

  a {
    color: ${({ theme }) => theme.dark};
    cursor: pointer;
  }

  @keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
  }
`;

export default GlobalStyles;
