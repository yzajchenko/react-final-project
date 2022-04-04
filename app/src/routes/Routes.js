import React from "react";
import { Switch, Route } from "react-router-dom";

import ROUTES from "./routesNames";
import SignUpContainer from "../pages/SingUpPage/container/SingUpContainer";
import SignInContainer from "../pages/SingInPage/container/SingInContainer";
import ProductsContainer from "../pages/ProductsPage/container/ProductsContainer";
import BasketContainer from "../pages/BasketPage/container/BasketContainer";
import ProductsDetailsContainer from "../pages/ProductsDetailsPage/container/ProductsDetailsContainer";
import PrivateRoute from "./PrivateRoute";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.SIGN_IN_PAGE} component={SignInContainer} />
      <PrivateRoute
        exact
        path={ROUTES.PRODUCTS_PAGE}
        component={ProductsContainer}
      />
      <PrivateRoute
        exact
        path={ROUTES.PRODUCTS_DETAILS_PAGE}
        component={ProductsDetailsContainer}
      />
      <PrivateRoute
        exact
        path={ROUTES.BASKET_PAGE}
        component={BasketContainer}
      />
      <Route exact path={ROUTES.SIGN_UP_PAGE} component={SignUpContainer} />
    </Switch>
  );
};

export default Routes;
