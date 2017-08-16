import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import "./styles/base.css";

import "github-markdown-css";

import ScrollToTop from "./components/ScrollToTop";

import injectTapEventPlugin from "react-tap-event-plugin";
import ThemeProvider from "material-ui/styles/MuiThemeProvider";
injectTapEventPlugin();

ReactDOM.render(
  <Router basename="/malikbrowne">
    <ThemeProvider>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </ThemeProvider>
  </Router>,
  document.getElementById("root")
);
