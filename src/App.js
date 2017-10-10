import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Helmet from "react-helmet";

import About from "./scenes/About";
import BlogList from "./scenes/BlogList";
import Contact from "./scenes/Contact";
import Home from "./scenes/Home";
import NotFound from "./scenes/NotFound";

import Spotter from "./scenes/Projects/Spotter";
import OldPortfolio from "./scenes/Projects/OldPortfolio";
import MyChef from "./scenes/Projects/MyChef";
import Mixmax from "./scenes/Projects/Mixmax";
import FactsOfToday from "./scenes/Projects/FactsOfToday";
import BeesDesign from "./scenes/Projects/BeesDesign";

import { TransitionGroup, CSSTransition } from "react-transition-group";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import withTracker from "./components/withTracker";

class App extends Component {
  render() {
    let { location } = this.props;
    const timeout = { enter: 300, exit: 200 };
    return (
      <div className="site">
        <Navbar />
        <Helmet
          titleTemplate="%s | Malik Browne"
          defaultTitle="Malik Browne | Front End Engineer &amp; UX Enthusiast"
        />
        <TransitionGroup component="main">
          <CSSTransition
            key={location.pathname}
            timeout={timeout}
            exit={false}
            classNames="fade"
          >
            <Switch>
              <Route exact path="/" component={withTracker(Home)} />
              <Route path="/blog" component={withTracker(BlogList)} />
              <Route exact path="/about" component={withTracker(About)} />
              <Route exact path="/contact" component={withTracker(Contact)} />
              <Route exact path="/spotter" component={withTracker(Spotter)} />
              <Route
                exact path="/old-portfolio"
                component={withTracker(OldPortfolio)}
              />
              <Route exact path="/mychef" component={withTracker(MyChef)} />
              <Route exact path="/mixmax" component={withTracker(Mixmax)} />
              <Route
                exact path="/factsoftoday"
                component={withTracker(FactsOfToday)}
              />
              <Route exact path="/beesdesign" component={withTracker(BeesDesign)} />
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
