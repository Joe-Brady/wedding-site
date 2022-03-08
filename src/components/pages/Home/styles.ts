import styled from "styled-components";
import theme from "../../../theme";

export const PageTitleContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: ${({ theme }) => theme.dark};
  > * {
    margin: 0;
  }
  opacity: 0;
  animation-name: fadeIn;
  animation-delay: 0.5s;
  animation-duration: 2s;
  animation-fill-mode: forwards;
`;

export const FormStage = styled("div")`
  display: flex
  flex-direction: column;
  justify-items: center;
  width: ${({ theme }) => theme.space(35)};
  max-width: 100%;
`;

export const Form = styled("form")`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NamesContainer = styled("div")`
  margin-top: 26rem;
  @media (max-width: 983px) {
    margin-top: 42%;
    transform: scale(0.8);
  }
  display: grid;
  grid-auto-flow: column;
  grid-gap: 1rem;
  align-items: baseline;
`;

export const HomeContainer = styled("div")`
  opacity: 0;
  animation-name: fadeIn;
  animation-delay: 2s;
  animation-duration: 2s;
  animation-fill-mode: forwards;
`;

export const MapThumbs = styled("div")`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
  @media (max-width: 983px) {
    flex-direction: column;
    align-items: center;
  }
  > * {
    margin: 1rem;
    width: 400px;
    max-width: 100%;
  }
`;

export const NavContainer = styled("nav")`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20rem;
  padding: 1rem 2rem;
  max-width: 100%;
  box-sizing: border-box;
  border: 1rem solid ${theme.highlight};
  > * {
    margin: 1rem;
    white-space: nowrap;
  }
`;
