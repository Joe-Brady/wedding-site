export enum PageUrl {
  Home = "/",
  OnTheDay = "/on-the-day",
}

export interface Theme {
  space: (arg1: number) => string;
  dark: string;
  light: string;
  grey50: string;
  highlight: string;
  error: string;
}
