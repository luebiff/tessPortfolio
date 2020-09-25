import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Work from "./Work";
import Education from "./Education";

export class Content extends Component {
  render() {
    return (
      <div className="contentContainer">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/work" component={Work} />
          <Route path="/education" component={Education} />
        </Switch>
      </div>
    );
  }
}

export default Content;
