import { handleActions } from "redux-actions";

import * as actions from "../actions";

const initialState = {
  itemList: [],
  isLoading: false,
  errors: null,
  totalPrice: 0
};

const orderReducer = handleActions(
  {
    [actions.ADD_PRODUCT]: (state, { payload }) => {
      const itemProduct = {
        ...payload,
        quantity: 1,
        priceStart: payload.price
      };
      const itemListCopy = state.itemList;
      let isProduct = false;
      let itemList;

      itemListCopy.forEach(item => {
        if (item.id === payload.id) {
          isProduct = true;
          item.quantity = item.quantity + 1;
          item.price = payload.price * item.quantity;
          return { ...item };
        }
      });

      if (!isProduct) {
        itemList = [...itemListCopy, itemProduct];
      } else {
        itemList = itemListCopy;
      }

      const totalPrice = itemList.reduce((sum, item) => sum + item.price, 0);

      return {
        ...state,
        totalPrice,
        itemList
      };
    },
    [actions.INCREMENT_PRODUCT]: (state, { payload }) => {
      const itemListCopy = state.itemList;

      itemListCopy.forEach(item => {
        if (item.id === payload.id) {
          item.quantity = item.quantity + 1;
          item.price = item.priceStart * item.quantity;
          return { ...item };
        }
      });

      const totalPrice = itemListCopy.reduce(
        (sum, item) => sum + item.price,
        0
      );

      return {
        ...state,
        totalPrice,
        itemList: itemListCopy
      };
    },
    [actions.DECREMENT_PRODUCT]: (state, { payload }) => {
      const itemListCopy = state.itemList;

      itemListCopy.forEach(item => {
        if (item.id === payload.id) {
          item.quantity = item.quantity - 1;
          item.price = item.priceStart * item.quantity;
          return { ...item };
        }
      });

      const totalPrice = itemListCopy.reduce(
        (sum, item) => sum + item.price,
        0
      );

      return {
        ...state,
        totalPrice,
        itemList: itemListCopy
      };
    },
    [actions.ORDER_REQUEST]: state => ({
      ...state,
      isLoading: true,
      itemList: [],
      totalPrice: 0
    }),
    [actions.ORDER_SUCCESS]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      data: payload.response.createdAt
    }),
    [actions.ORDER_FAIL]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      errors: payload.response
    })
  },
  initialState
);

export default orderReducer;
