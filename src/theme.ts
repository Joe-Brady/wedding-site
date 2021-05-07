import { Theme } from "./types";

const gridSpacing = (multiplier: number): string => `${multiplier * 8}px`;

const theme: Theme = {
  space: gridSpacing,
  dark: "#1A0F09",
  light: "#FEF6E1",
  highlight: "#874925",
  error: "#A40A0A",
};

export default theme;
