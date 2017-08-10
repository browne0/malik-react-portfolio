import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import About from './scenes/About';
import BlogList from './scenes/BlogList';
import Home from './scenes/Home';
import NotFound from './scenes/NotFound';
import Portfolio from './scenes/Portfolio';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/blog" component={BlogList} />
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
