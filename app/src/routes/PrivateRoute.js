import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import ROUTES from "./routesNames";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuth } = useSelector(state => state.signIn);

  return (
    <Route
      {...rest}
      render={props =>
        !isAuth ? (
          <Redirect to={ROUTES.SIGN_IN_PAGE} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PrivateRoute;
