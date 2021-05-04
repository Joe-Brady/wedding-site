import React, { ReactElement } from "react";
import GlobalStyles from "./GlobalStyles";
import Router from "./Router";
import ErrorBoundary from "./ErrorBoundary";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

const App = (): ReactElement => (
  <ErrorBoundary>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router />
    </ThemeProvider>
  </ErrorBoundary>
);

export default App;
