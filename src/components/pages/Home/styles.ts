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
  padding-top: 8rem;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 1rem 2rem;
  max-width: 100%;
  box-sizing: border-box;
  border: 1rem solid ${theme.highlight};
  background-color: ${theme.lightTint};
  > * {
    margin: 1rem;
    white-space: nowrap;
  }
`;

export const NavAndImage = styled("div")`
  position: relative;
  width: 20rem;
  margin: auto;
`;

export const Tulip = styled("img")`
  position: absolute;
  z-index: -1;
  left: -134%;
  top: -62%;
  transform: scale(0.7) rotate(-9deg);
`;

export const Leaf = styled("img")`
  position: absolute;
  z-index: -1;
  left: -74%;
  top: -14%;
  transform: scale(0.7) rotate(72deg) scaleX(-1);
`;

export const TextBlock = styled("div")`
  width: 40rem;
  padding: 0 2rem;
  max-width: 100%;
  box-sizing: border-box;
  margin: auto;
  text-align: center;
`;

export const AccomContainer = styled("div")`
  display: flex;
  justify-content: center;

  > div {
    margin: 0 2rem;
    > * {
      text-align: center;
    }
  }

  @media (max-width: 983px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const StoryImage = styled("img")`
  width: 20rem;
  max-width: 100%;
  margin: 1rem auto;
`;

export const StoryImageTwoUp = styled("div")`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  @media (max-width: 983px) {
    grid-template-columns: 1fr;
  }
`;

export const PolaroidGrid = styled("div")`
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 1rem;
  width: 80rem;
  max-width: 100%;
  padding: 2rem;
  box-sizing: border-box;
  > img {
    width: 100%;
  }
  @media (max-width: 983px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const MapIcons = styled("div")`
  display: grid;
  grid-template-columns: 2rem 2rem;
  grid-gap: 1rem;
  padding: 2rem;
  padding-top: 0;
  justify-content: center;
  > img {
    width: 100%;
    height: 100%;
  }
`;
