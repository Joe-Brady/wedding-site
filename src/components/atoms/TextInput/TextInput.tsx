import React, { ReactElement } from "react";
import styled from "styled-components";

const Input = styled("input")`
  padding: ${({ theme }) => theme.space(2)};
  border-radius: 100px;
  border: 1px solid ${({ theme }) => theme.grey50};
  width: 100%;
  box-sizing: border-box;
  box-shadow: none;
  margin-bottom: 2rem;
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
