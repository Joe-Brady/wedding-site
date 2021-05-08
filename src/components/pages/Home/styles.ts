import styled from "styled-components";

export const PageTitleContainer = styled("div")`
  text-align: center;
  color: ${({ theme }) => theme.light};
  > * {
    margin: 0;
  }
`;

export const Label = styled("label")`
  display: grid;
  grid-auto-flow: column;
  grid-gap: ${({ theme }) => theme.space(2)};
  align-items: center;
`;

export const Form = styled("form")`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
