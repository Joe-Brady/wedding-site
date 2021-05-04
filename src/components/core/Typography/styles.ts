import styled from "styled-components";

export const Body = styled("p")``;

export const H1 = styled("h1")``;

export const H2 = styled("h2")``;

export const H3 = styled("h3")``;

export const H4 = styled("h4")`
  text-transform: uppercase;
  font-weight: 100;
`;

export const Error = styled("span")`
  color: ${({ theme }) => theme.error};
`;
