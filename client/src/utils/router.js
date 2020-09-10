import React from "react";
import { Switch, Route } from "react-router-dom";

// Pages
import Home from "pages/Home";
import Cars from "pages/Cars";

export const routes = {
  home: "/",
  cars: "/cars",
};

export default (
  <Switch>
    <Route exact path={routes.home} component={Home} />
    <Route exact path={routes.cars} component={Cars} />
  </Switch>
);
