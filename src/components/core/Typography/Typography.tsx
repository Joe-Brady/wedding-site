import { StyledComponentBase } from "styled-components";
import React, { ReactElement, CSSProperties } from "react";
import * as StyledVariants from "./styles";
import { Theme } from "../../../types";

export interface Props {
  variant: "body" | "h1" | "h2" | "h3" | "h4" | "error";
  text: string;
  style?: CSSProperties;
}

const Typography = ({ variant, text, style }: Props): ReactElement => {
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

  return <VariantComponent style={{ ...style }}>{text}</VariantComponent>;
};

export default Typography;
