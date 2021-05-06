export enum PageUrl {
  Home = "/",
  RsvpSuccess = "/rsvp-success",
  OnTheDay = "/on-the-day",
}

export interface Theme {
  space: (arg1: number) => string;
  dark: string;
  light: string;
  highlight: string;
  error: string;
}
