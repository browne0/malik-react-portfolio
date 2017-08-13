import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './base.css';

import 'github-markdown-css';

import injectTapEventPlugin from 'react-tap-event-plugin';
import ThemeProvider from 'material-ui/styles/MuiThemeProvider';
injectTapEventPlugin();

ReactDOM.render(
	<ThemeProvider>
		<App />
	</ThemeProvider>
	, document.getElementById('root'));