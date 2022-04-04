import { createAction } from "redux-actions";

export const PRODUCTS_DETAILS_REQUEST = createAction(
  "PRODUCTS_DETAILS_REQUEST"
);
export const PRODUCTS_DETAILS_SUCCESS = createAction(
  "PRODUCTS_DETAILS_SUCCESS"
);
export const PRODUCTS_DETAILS_FAIL = createAction("PRODUCTS_DETAILS_FAIL");
