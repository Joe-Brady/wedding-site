import styled from "styled-components";

export const Body = styled("p")`
  font-size: ${({ theme }) => theme.space(2)};
  line-height ${({ theme }) => theme.space(3)};
`;

export const H1 = styled("h1")`
  font-size: ${({ theme }) => theme.space(8)};
  font-weight: 400;
`;

export const H2 = styled("h2")`
  font-size: ${({ theme }) => theme.space(5)};
  font-weight: 500;
`;

export const H3 = styled("h3")`
  font-size: ${({ theme }) => theme.space(3)};
  font-weight: 400;
  margin-top: 3rem;
`;

export const H4 = styled("h4")`
  font-size: ${({ theme }) => theme.space(3)};
  font-weight: 300;
`;

export const H4Link = styled("a")`
  font-size: ${({ theme }) => theme.space(3)};
  font-weight: 300;
  color: ${({ theme }) => theme.dark};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const Error = styled("span")`
  color: ${({ theme }) => theme.error};
`;
