import { Theme } from "./types";

const gridSpacing = (multiplier: number): string => `${multiplier * 8}px`;

const theme: Theme = {
  space: gridSpacing,
  dark: "#1A0F09",
  light: "#FFFFFF",
  grey50: "#B4B4B4",
  highlight: "#A43104",
  error: "#A40A0A",
};

export default theme;
