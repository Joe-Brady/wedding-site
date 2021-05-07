import React, { ReactElement } from "react";
import styled from "styled-components";

const Input = styled("input")`
  padding: ${({ theme }) => theme.space(2)};
  border-radius: ${({ theme }) => theme.space(2)};
  border: none;
  display: flex;
  width: ${({ theme, size }) => (size ? theme.space(size) : "auto")};
`;

export interface Props {
  defaultValue?: number;
  placeholder?: string;
  name: string;
  size?: number;
}

const NumberInput = ({
  defaultValue,
  placeholder,
  name,
  size,
}: Props): ReactElement => (
  <Input
    type="number"
    defaultValue={defaultValue}
    placeholder={placeholder}
    name={name}
    size={size}
  />
);

export default NumberInput;
