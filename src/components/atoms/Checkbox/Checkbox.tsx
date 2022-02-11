import React, { ReactElement } from "react";
import styled from "styled-components";
import Typography from "../../core/Typography/Typography";

const InputContainer = styled("div")`
  display: flex;
  align-items: center;
`;

const Input = styled("input")`
  border: 1px solid ${({ theme }) => theme.grey50};
  margin-right: 1rem;
  &[type="checkbox"] {
    transform: scale(1.5);
  }
`;

export interface Props {
  name: string;
  label: string;
}

const Checkbox = ({ label, name }: Props): ReactElement => (
  <InputContainer>
    <Input type="checkbox" name={name} />
    <Typography variant="body" text={label} />
  </InputContainer>
);

export default Checkbox;
