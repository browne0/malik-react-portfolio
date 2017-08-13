import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import About from './scenes/About';
import BlogList from './scenes/BlogList';
import Contact from './scenes/Contact';
import Home from './scenes/Home';
import NotFound from './scenes/NotFound';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="site">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/blog" component={BlogList} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="*" component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
