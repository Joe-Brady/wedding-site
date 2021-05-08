import React, { ChangeEvent, ReactElement } from "react";
import styled from "styled-components";

const StyledSelect = styled("select")`
  grid-area: input;
  padding: ${({ theme }) => theme.space(2)};
  padding-right: ${({ theme }) => theme.space(6)};
  border-radius: 100px;
  border: 1px solid ${({ theme }) => theme.grey50};
  -webkit-appearance: none;
  -moz-appearance: none;
  cursor: pointer;
`;

const SelectContainer = styled("div")`
  position: relative;
  display: inline-block;
  width: fit-content;
`;

const ArrowContainer = styled("div")`
  position: absolute;
  right: ${({ theme }) => theme.space(2)};
  top: 50%;
  transform: translateY(-45%);
  pointer-events: none;
`;

export interface Props {
  name: string;
  options: { value: string; text: string }[];
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const Select = ({ name, options, onChange }: Props): ReactElement => (
  <SelectContainer>
    <StyledSelect name={name} onChange={onChange}>
      {options.map((option) => (
        <option value={option.value}>{option.text}</option>
      ))}
    </StyledSelect>

    <ArrowContainer>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 12 12"
        width="12"
        height="12"
      >
        <g fill="#000000">
          <path
            d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z"
            fill="#000000"
          />
        </g>
      </svg>
    </ArrowContainer>
  </SelectContainer>
);

export default Select;
