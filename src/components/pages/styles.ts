import { Link } from "react-router-dom";
import styled from "styled-components";

export const Body = styled("div")`
  position: relative;
  padding: ${({ theme }) => theme.space(2)};
`;

export const Nav = styled("nav")`
  display: grid;
  justify-content: flex-end;
  grid-auto-flow: column;
  grid-gap: ${({ theme }) => theme.space(4)};
  padding: ${({ theme }) => theme.space(2)};
  margin-bottom: ${({ theme }) => theme.space(2)};
`;

export const NavLink = styled(Link)`
  color: ${({ theme }) => theme.dark};
  text-decoration: none;
  white-space: nowrap;
  padding: ${({ theme }) => theme.space(0.5)} 0;
  border-bottom: 2px solid ${({ theme }) => theme.dark};
  transition: 0.3s background-color;
  background-color: rgba(255, 255, 255, 0);

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

export const Main = styled("main")`
  position: relative;
  z-index: 1;
`;

export const HeadContainer = styled("div")`
  position: relative;
  z-index: 1;
  margin-bottom: ${({ theme }) => theme.space(16)};
`;

export const HeadImage = styled("img")`
  width: 80rem;
  max-width: 130%;
  margin-top: -20rem;
  @media (max-width: 983px) {
    margin-top: -32.5%;
  }
`;

export const HeadImageContainer = styled("div")`
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  left: 0;
  top: 0;
  overflow: hidden;
`;
