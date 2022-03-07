import React, { ReactElement, useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import CheckboxMUI from "@mui/material/Checkbox";

export interface Props {
  name: string;
  label: string;
}

const Checkbox = ({ label, name }: Props): ReactElement => {
  const [checked, setChecked] = useState(false);

  return (
    <FormControlLabel
      control={
        <CheckboxMUI
          name={name}
          value={checked}
          onChange={() => setChecked((currentChecked) => !currentChecked)}
        />
      }
      label={label}
    />
  );
};

export default Checkbox;
