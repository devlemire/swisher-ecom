import React from "react";
import { Switch, Route } from "react-router-dom";

// Pages
import Home from "pages/Home";
import Cars from "pages/Cars";
import CarDetail from "pages/CarDetail";

export const routes = {
  home: "/",
  cars: "/cars",
  carDetail: "/car/:carId",
};

export default (
  <Switch>
    <Route exact path={routes.home} component={Home} />
    <Route exact path={routes.cars} component={Cars} />
    <Route exact path={routes.carDetail} component={CarDetail} />
  </Switch>
);
