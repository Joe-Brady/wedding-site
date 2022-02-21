import React, { ReactElement } from "react";
import GlobalStyles from "./GlobalStyles";
import ErrorBoundary from "./ErrorBoundary";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import Password from "./components/pages/Password/Password";
import Home from "./components/pages/Home/Home";

const App = (): ReactElement => (
  <ErrorBoundary>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Password>
        <Home />
      </Password>
    </ThemeProvider>
  </ErrorBoundary>
);

export default App;
