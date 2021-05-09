import * as signUpActions from "../pages/SingUpPage/actions";
import * as signUpAPI from "../pages/SingUpPage/api";

import * as signInActions from "../pages/SingInPage/actions";
import * as signInAPI from "../pages/SingInPage/api";

import * as productActions from "../pages/ProductsPage/actions";
import * as productAPI from "../pages/ProductsPage/api";

import * as productsDetailsActions from "../pages/ProductsDetailsPage/actions";
import * as productsDetailsAPI from "../pages/ProductsDetailsPage/api";

const apiCallsMapping = action => {
  const mapping = {
    [signUpActions.SING_UP_REQUEST]: signUpAPI.signUp,
    [signInActions.SIGN_IN_REQUEST]: signInAPI.signIn,
    [productActions.PRODUCTS_REQUEST]: productAPI.products,
    [productsDetailsActions.PRODUCTS_DETAILS_REQUEST]:
      productsDetailsAPI.productsDetails
  };

  if (!mapping.hasOwnProperty(action.type)) {
    throw Error("Not mapped action");
  }

  return mapping[action.type];
};

export default apiCallsMapping;
