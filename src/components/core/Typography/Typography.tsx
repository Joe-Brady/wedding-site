import { StyledComponentBase } from "styled-components";
import React, { ReactElement, CSSProperties } from "react";
import * as StyledVariants from "./styles";
import { Theme } from "../../../types";

export interface Props {
  variant: "body" | "h1" | "h2" | "h3" | "h4" | "error";
  text: string;
  margin?: boolean;
}

const Typography = ({ variant, text, margin }: Props): ReactElement => {
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
    case "error":
      VariantComponent = StyledVariants.Error;
      break;
  }

  const styleOverrides: CSSProperties = {};
  if (margin === false) styleOverrides.margin = 0;

  return <VariantComponent style={styleOverrides}>{text}</VariantComponent>;
};

export default Typography;
