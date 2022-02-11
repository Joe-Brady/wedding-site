import styled from "styled-components";

export const PageTitleContainer = styled("div")`
  text-align: center;
  color: ${({ theme }) => theme.light};
  > * {
    margin: 0;
  }
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
