import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';


import App from './App';
import './base.css';

import 'github-markdown-css';

import injectTapEventPlugin from 'react-tap-event-plugin';
import ThemeProvider from 'material-ui/styles/MuiThemeProvider';
injectTapEventPlugin();

ReactDOM.render(
  <Router basename="/malikbrowne">
  	<ThemeProvider>
  		<App />
  	</ThemeProvider>
  </Router>
	, document.getElementById('root'));