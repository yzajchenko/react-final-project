import { handleActions } from "redux-actions";

import * as actions from "../actions";

const initialState = {
  success: false,
  isLoading: false,
  message: null
};

const signUpReducer = handleActions(
  {
    [actions.SING_UP_REQUEST]: state => ({
      ...state,
      isLoading: true
    }),
    [actions.SING_UP_SUCCESS]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      success: payload.response
    }),
    [actions.SING_UP_FAIL]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      errors: payload.response
    })
  },
  initialState
);

export default signUpReducer;
