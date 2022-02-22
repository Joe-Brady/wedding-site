import React, { ReactElement } from "react";
import GlobalStyles from "./GlobalStyles";
import ErrorBoundary from "./ErrorBoundary";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import Password from "./components/pages/Password/Password";
import Home from "./components/pages/Home/Home";
import {
  createTheme,
  ThemeProvider as ThemeProviderMUI,
} from "@mui/material/styles";

const themeMUI = createTheme({
  palette: {
    primary: { main: "#829885" },
  },
  typography: {
    fontFamily: ["Baskerville", "sans-serif"].join(","),
    fontSize: 16,
  },
});

const App = (): ReactElement => (
  <ErrorBoundary>
    <ThemeProvider theme={theme}>
      <ThemeProviderMUI theme={themeMUI}>
        <GlobalStyles />
        <Password>
          <Home />
        </Password>
      </ThemeProviderMUI>
    </ThemeProvider>
  </ErrorBoundary>
);

export default App;
