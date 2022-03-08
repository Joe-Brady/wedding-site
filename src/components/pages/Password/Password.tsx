import React, { ReactElement, useEffect, useState } from "react";
import Cookies from "js-cookie";
import TextField from "@mui/material/TextField";
import Typography from "../../core/Typography/Typography";
import { PasswordContainer } from "./styles";
import { HeadImage, HeadImageContainer } from "../styles";
import { TextBlock } from "../Home/styles";

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [passwordEnteredCorrectly]);

  return passwordEnteredCorrectly ? (
    children
  ) : (
    <div>
      <HeadImageContainer>
        <HeadImage src="https://res.cloudinary.com/dqqwahudr/image/upload/v1646773057/flowers_zdwe3t.png" />
      </HeadImageContainer>

      <PasswordContainer>
        <Typography variant="h2" text="Enter the 4-digit PIN" />

        <TextField
          type="number"
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

        <TextBlock>
          {password.length > 3 && password !== correctPassword && (
            <Typography
              variant="error"
              text="Incorrect PIN"
              style={{ marginTop: "1rem" }}
            />
          )}

          <Typography
            variant="body"
            text="Hint: The date of our wedding in 'day day month month' format."
            style={{ marginTop: "2rem" }}
          />
        </TextBlock>
      </PasswordContainer>
    </div>
  );
};

export default Password;
