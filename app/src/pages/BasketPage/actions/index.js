import { createAction } from "redux-actions";

export const ORDER_REQUEST = createAction("ORDER_REQUEST");
export const ORDER_SUCCESS = createAction("ORDER_SUCCESS");
export const ORDER_FAIL = createAction("ORDER_FAIL");
export const ADD_PRODUCT = createAction("ADD_PRODUCT");
export const DECREMENT_PRODUCT = createAction("DECREMENT_PRODUCT");
export const INCREMENT_PRODUCT = createAction("INCREMENT_PRODUCT");
