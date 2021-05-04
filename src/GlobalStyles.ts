import { createGlobalStyle } from "styled-components";
import normalizeCSS from "./normalize-css";

const GlobalStyles = createGlobalStyle`
  ${normalizeCSS};

  html, body {
    font-family: sans-serif;
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
