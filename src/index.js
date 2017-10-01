import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import "./styles/base.css";

import "github-markdown-css";

import ScrollToTop from "./components/ScrollToTop";

import injectTapEventPlugin from "react-tap-event-plugin";
import ThemeProvider from "material-ui/styles/MuiThemeProvider";
injectTapEventPlugin();

render(
  <Router>
    <ThemeProvider>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </ThemeProvider>
  </Router>,
  document.getElementById("root")
);
