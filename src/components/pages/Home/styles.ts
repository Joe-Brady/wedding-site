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
  grid-gap: ${({ theme }) => theme.space(4)};
  align-items: center;
  grid-template-areas: "question" "input" "button";
  justify-items: center;
  width: ${({ theme }) => theme.space(40)};
  max-width: 100%;
`;

export const Form = styled("form")`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
