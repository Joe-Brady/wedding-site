import { StyledComponentBase } from "styled-components";
import React, { ReactElement, CSSProperties } from "react";
import * as StyledVariants from "./styles";
import { Theme } from "../../../types";

export interface Props {
  variant: "body" | "h1" | "h2" | "h3" | "h4" | "h4link" | "error";
  text: string;
  style?: CSSProperties;
  fontStyle?: "regular" | "bold" | "italic";
  smallCaps?: boolean;
  [x: string]: any;
}

const Typography = ({
  variant,
  text,
  style,
  fontStyle = "regular",
  smallCaps = false,
  ...rest
}: Props): ReactElement => {
  let VariantComponent: StyledComponentBase<
    keyof JSX.IntrinsicElements,
    Theme
  > = StyledVariants.Body;

  switch (variant) {
    case "h1":
      VariantComponent = StyledVariants.H1;
      break;
    case "h2":
      VariantComponent = StyledVariants.H2;
      break;
    case "h3":
      VariantComponent = StyledVariants.H3;
      break;
    case "h4":
      VariantComponent = StyledVariants.H4;
      break;
    case "h4link":
      VariantComponent = StyledVariants.H4Link;
      break;
    case "error":
      VariantComponent = StyledVariants.Error;
      break;
  }

  return (
    <VariantComponent
      style={{
        ...style,
        fontStyle,
        fontVariant: smallCaps ? "small-caps" : "normal",
      }}
      {...rest}
    >
      {text}
    </VariantComponent>
  );
};

export default Typography;
