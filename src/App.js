import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./styles/global";
import theme from "./styles/theme";
import Routes from "./routes";

const App = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  </BrowserRouter>
);

export default App;
