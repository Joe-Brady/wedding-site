import styled from "styled-components";

export const ScrollDownContainer = styled("div")`
  display: grid;
  grid-auto-flow: row;
  margin: 2rem 0 4rem 0;
  justify-content: center;
  opacity: 0;
  animation-name: fadeIn;
  animation-delay: 2s;
  animation-duration: 2s;
  animation-fill-mode: forwards;
`;

export const ChevronContainer = styled("div")`
  width: 4rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  width: 100%;
`;

export const Chevron = styled("div")`
  position: absolute;
  width: 28px;
  height: 8px;
  opacity: 0;
  transform: scale3d(0.5, 0.5, 0.5);
  animation: move 3s ease-out infinite;

  &:first-child {
    animation: move 3s ease-out 1s infinite;
  }

  &:nth-child(2) {
    animation: move 3s ease-out 2s infinite;
  }

  &:before,
  &:after {
    content: " ";
    position: absolute;
    top: 0;
    height: 100%;
    width: 51%;
    background: ${({ theme }) => theme.dark};
  }

  &:before {
    left: 0;
    transform: skew(0deg, 30deg);
  }

  &:after {
    right: 0;
    width: 50%;
    transform: skew(0deg, -30deg);
  }
`;
