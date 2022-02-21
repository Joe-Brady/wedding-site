import { createGlobalStyle } from "styled-components";
import normalizeCSS from "./normalize-css";
import Baskerville from "./fonts/Baskerville.ttf";
import BaskervilleBold from "./fonts/BaskervilleBold.ttf";
import BaskervilleItalic from "./fonts/BaskervilleItalic.ttf";

const GlobalStyles = createGlobalStyle`
  ${normalizeCSS};

  @font-face {
    font-family: 'Baskerville';
    src: url(${Baskerville}) format('ttf');
  }

  @font-face {
    font-family: 'Baskerville';
    src: url(${BaskervilleBold}) format('ttf');
    font-weight: bold;
  }

  @font-face {
    font-family: 'Baskerville';
    src: url(${BaskervilleItalic}) format('ttf');
    font-style: italic, oblique;
  }

  html, body {
    font-family: 'Baskerville', sans-serif;
    font-weight: 400;
    color: ${({ theme }) => theme.dark};
    background-color: ${({ theme }) => theme.lightTint};
  }

  a {
    color: ${({ theme }) => theme.dark};
    cursor: pointer;
  }

  @keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
  }


  @keyframes move {
    25% {
      opacity: 1;

    }
    33% {
      opacity: 1;
      transform: translateY(30px);
    }
    67% {
      opacity: 1;
      transform: translateY(40px);
    }
    100% {
      opacity: 0;
      transform: translateY(55px) scale3d(0.5, 0.5, 0.5);
    }
  }

  @keyframes pulse {
    to {
      opacity: 1;
    }
  }
`;

export default GlobalStyles;
