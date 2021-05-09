import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import { createBlacklistFilter } from "redux-persist-transform-filter";
import storage from "redux-persist/lib/storage";

import signUp from "../pages/SingUpPage/reducers";
import signIn from "../pages/SingInPage/reducers";
import products from "../pages/ProductsPage/reducers";
import productsDetails from "../pages/ProductsDetailsPage/reducers";

const authBlackListedFields = createBlacklistFilter("signIn", [
  "isLoading",
  "errors"
]);

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["signIn"],
  transform: [authBlackListedFields]
};

const rootReducer = combineReducers({
  signUp,
  signIn,
  products,
  productsDetails
});

export default persistReducer(persistConfig, rootReducer);
