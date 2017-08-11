import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './base.css';

import theme from './assets/react-toolbox/theme';
import './assets/react-toolbox/theme.css';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';

import 'github-markdown-css';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<App />
	</ThemeProvider>
	, document.getElementById('root'));
// registerServiceWorker();
