import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePageContainer from "../pages/HomePage/containers/HomePageContainer";

import ROUTES from "./routesNames";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.HOME_PAGE} component={HomePageContainer} />
    </Switch>
  );
};

export default Routes;
