import React, { ReactElement, useEffect, useState } from "react";
import Cookies from "js-cookie";
import TextField from "@mui/material/TextField";
import Typography from "../../core/Typography/Typography";
import { PasswordContainer } from "./styles";
import { HeadImage, HeadImageContainer } from "../styles";

interface Props {
  children: ReactElement;
}

const correctPassword = "2905";

const Password = ({ children }: Props): ReactElement => {
  const [password, setPassword] = useState("");
  const [passwordEnteredCorrectly, setPasswordEnteredCorrectly] = useState<
    string | undefined
  >(Cookies.get("passwordEnteredCorrectly") as string);

  useEffect(() => {
    if (password === correctPassword) {
      setPasswordEnteredCorrectly("TRUE");
      Cookies.set("passwordEnteredCorrectly", "TRUE", { sameSite: "Strict" });
    }
  }, [password]);

  return passwordEnteredCorrectly ? (
    children
  ) : (
    <div>
      <HeadImageContainer>
        <HeadImage src="https://res.cloudinary.com/dqqwahudr/image/upload/v1645363106/flowers_wlxnim.png" />
      </HeadImageContainer>

      <PasswordContainer>
        <Typography variant="h2" text="Enter the 4-digit PIN" />
        <TextField
          placeholder="PIN"
          variant="outlined"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          InputProps={{
            inputProps: {
              style: { textAlign: "center" },
            },
          }}
        />
      </PasswordContainer>
    </div>
  );
};

export default Password;
