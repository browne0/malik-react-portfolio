import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import About from "./scenes/About";
import BlogList from "./scenes/BlogList";
import Contact from "./scenes/Contact";
import Home from "./scenes/Home";
import NotFound from "./scenes/NotFound";

import Spotter from "./scenes/Projects/Spotter";
import OldPortfolio from "./scenes/Projects/OldPortfolio";
import MyChef from "./scenes/Projects/MyChef";
import Mixmax from "./scenes/Projects/Mixmax";
import MedXPort from "./scenes/Projects/MedXPort";
import BeesDesign from "./scenes/Projects/BeesDesign";

import { TransitionGroup, CSSTransition } from "react-transition-group";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    let { location } = this.props;
    const timeout = { enter: 300, exit: 200 };
    return (
      <div className="site">
        <Navbar />
        <TransitionGroup component="main">
          <CSSTransition
            key={location.pathname}
            timeout={timeout}
            exit={false}
            classNames="fade"
          >
            <Switch location={location}>
              <Route exact path="/" component={Home} />
              <Route path="/blog" component={BlogList} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/spotter" component={Spotter} />
              <Route path="/old-portfolio" component={OldPortfolio} />
              <Route path="/mychef" component={MyChef} />
              <Route path="/mixmax" component={Mixmax} />
              <Route path="/medxport" component={MedXPort} />
              <Route path="/beesdesign" component={BeesDesign} />
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
