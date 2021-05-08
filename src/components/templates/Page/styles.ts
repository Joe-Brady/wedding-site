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
  color: ${({ theme }) => theme.light};
  text-decoration: none;
  white-space: nowrap;
  padding: ${({ theme }) => theme.space(0.5)} 0;
  border-bottom: 2px solid ${({ theme }) => theme.light};
  transition: 0.3s background-color;
  background-color: rgba(255, 255, 255, 0);

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

export const Main = styled("main")`
  position: relative;
`;

export const HeadContainer = styled("div")`
  position: relative;
  margin-bottom: ${({ theme }) => theme.space(16)};
`;

export const HeadImage = styled("img")`
  pointer-events: none;
  position: absolute;
  left: 50%;
  transform: translateX(-50%) scale(0.8);
  top: -800px;
`;
