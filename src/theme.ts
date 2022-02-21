import { Theme } from "./types";

const gridSpacing = (multiplier: number): string => `${multiplier * 8}px`;

const theme: Theme = {
  space: gridSpacing,
  dark: "#1A0F09",
  light: "#FFFFFF",
  lightTint: "#FCF6EB",
  grey50: "#B4B4B4",
  highlight: "#829885",
  error: "#A40A0A",
};

export default theme;
