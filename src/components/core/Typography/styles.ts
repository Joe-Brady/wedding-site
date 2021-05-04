import styled from "styled-components";

export const Body = styled("p")``;

export const H1 = styled("h1")`
  font-size: ${({ theme }) => theme.space(8)};
  font-weight: 400;
`;

export const H2 = styled("h2")`
  font-size: ${({ theme }) => theme.space(4)};
  font-weight: 500;
`;

export const H3 = styled("h3")`
  font-size: ${({ theme }) => theme.space(3)};
  font-weight: 400;
`;

export const H4 = styled("h4")`
  font-size: ${({ theme }) => theme.space(2)};
  font-weight: 100;
  text-transform: uppercase;
`;

export const Error = styled("span")`
  color: ${({ theme }) => theme.error};
`;
