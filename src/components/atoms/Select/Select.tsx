import React, { ReactElement, useState } from "react";
import { SelectChangeEvent } from "@mui/material";
import SelectMUI from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import styled from "styled-components";

export interface Props {
  name: string;
  options: { value: string; text: string }[];
  onChange?: (event: SelectChangeEvent<unknown>) => void;
}

const SelectMUIStyled = styled(SelectMUI)`
  margin: 2rem 0;
  input:focus {
    outline: none;
    box-shadow: 0px 0px 2px red;
  }
`;

const Select = ({ name, options, onChange }: Props): ReactElement => {
  const [value, setValue] = useState("");

  return (
    <SelectMUIStyled
      name={name}
      displayEmpty
      onChange={(e) => {
        setValue(e.target.value as string);
        if (onChange) onChange(e);
      }}
      fullWidth
      value={value}
      renderValue={(value) => {
        if (value === "") return <span>Select</span>;
        return <span>{value as string}</span>;
      }}
    >
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.text}
        </MenuItem>
      ))}
    </SelectMUIStyled>
  );
};

export default Select;
