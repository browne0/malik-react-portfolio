import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import About from './scenes/About';
import BlogList from './scenes/BlogList';
import Contact from './scenes/Contact';
import Home from './scenes/Home';
import NotFound from './scenes/NotFound';

import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

class App extends Component {
  render() {
    let {location} = this.props;
    const timeout = { enter: 300, exit: 200 };
    return (
      <div className="site">
        <Navbar />
        <TransitionGroup component="main">
          <CSSTransition key={location.pathname} timeout={timeout} classNames="fade" appear>
            <Switch location={location}>
              <Route exact path="/" component={Home} />
              <Route path="/blog" component={BlogList} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route component={NotFound} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
