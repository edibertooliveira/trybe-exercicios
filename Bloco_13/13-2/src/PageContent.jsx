import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";

class PageContent extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route path="/Page2" component={Page2} />
          <Route path="/Page3" component={Page3} />
          <Route path="/" component={Page1} />
        </Switch>
      </main>
    );
  }
}

export default PageContent;
