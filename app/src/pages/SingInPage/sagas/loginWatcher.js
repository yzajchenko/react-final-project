import { takeEvery } from "redux-saga/effects";
import { SIGN_IN_SUCCESS } from "../actions";
import launchSaga from "../../../helpers/requests/launchSaga";

function* loginWatcher() {
  yield takeEvery(SIGN_IN_SUCCESS, launchSaga);
}

export default loginWatcher;
