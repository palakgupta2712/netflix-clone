import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Details from "../pages/Details";
import Home from "../pages/Home";

function Routes() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/:id" component={Details} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default Routes;
