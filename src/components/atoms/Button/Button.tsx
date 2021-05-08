import React, { ReactElement, MouseEvent } from "react";
import styled from "styled-components";

const StyledButton = styled("button")`
  grid-area: button;
  padding: ${({ theme }) => `${theme.space(2)} ${theme.space(3)}`};
  border-radius: 100px;
  border: none;
  background-color: ${({ theme }) => theme.dark};
  color: ${({ theme }) => theme.light};
  opacity: ${({ disabled }) => (disabled ? "0.3" : "1")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  width: fit-content;

  &:hover {
    opacity: ${({ disabled }) => (disabled ? "0.3" : "0.8")};
  }
`;

export interface Props {
  text: string;
  onClick?: (event: MouseEvent) => void;
  submit?: boolean;
  disabled?: boolean;
}

const Button = ({ text, onClick, submit, disabled }: Props): ReactElement => (
  <StyledButton
    type={submit ? "submit" : undefined}
    onClick={onClick}
    disabled={disabled}
  >
    {text}
  </StyledButton>
);

export default Button;
