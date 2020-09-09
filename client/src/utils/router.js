import React from "react";
import { Switch, Route } from "react-router-dom";

// Pages
import Home from "pages/Home";

export const routes = {
  home: "/",
};

export default (
  <Switch>
    <Route exact path={routes.home} component={Home} />
  </Switch>
);
