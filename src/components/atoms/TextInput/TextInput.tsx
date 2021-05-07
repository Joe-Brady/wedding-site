import React, { ReactElement } from "react";
import styled from "styled-components";

const Input = styled("input")`
  padding: ${({ theme }) => theme.space(2)};
  border-radius: ${({ theme }) => theme.space(2)};
  border: none;
`;

export interface Props {
  placeholder?: string;
  name: string;
  password?: boolean;
}

const TextInput = ({ placeholder, name, password }: Props): ReactElement => (
  <Input
    type={password ? "password" : "text"}
    placeholder={placeholder}
    name={name}
  />
);

export default TextInput;
