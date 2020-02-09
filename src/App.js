import React from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./styles/global";
import theme from "./styles/theme";

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <div className="App">oi teste</div>
  </ThemeProvider>
);

export default App;
