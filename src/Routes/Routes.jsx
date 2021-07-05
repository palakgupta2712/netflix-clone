import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Trailer from "../pages/Trailer";
import Details from "../pages/Details";
import Home from "../pages/Home";

function Routes() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/title/:id" exact component={Details} />
          <Route path="/trailer" exact component={Trailer} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default Routes;
