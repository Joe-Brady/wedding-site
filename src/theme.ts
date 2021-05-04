import { Theme } from "./types";

const gridSpacing = (multiplier: number): string => `${multiplier * 8}px`;

const theme: Theme = {
  space: gridSpacing,
  dark: "black",
  light: "white",
  highlight: "orange",
  error: "red",
};

export default theme;
