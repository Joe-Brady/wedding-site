import React, { ReactElement, MouseEvent } from "react";
import styled from "styled-components";

const StyledButton = styled("button")`
  padding: ${({ theme }) => `${theme.space(2)} ${theme.space(3)}`};
  border-radius: 100px;
  border: none;
  background-color: ${({ theme }) => theme.highlight};
  color: ${({ theme }) => theme.light};
  opacity: ${({ disabled }) => (disabled ? "0.3" : "1")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  width: 100%;
  margin-bottom: 2rem;

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
    type={submit ? "submit" : "button"}
    onClick={onClick}
    disabled={disabled}
  >
    {text}
  </StyledButton>
);

export default Button;
