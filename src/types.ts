export enum PageUrl {
  Home = "/",
}

export interface Theme {
  space: (arg1: number) => string;
  dark: string;
  light: string;
  highlight: string;
  error: string;
}
