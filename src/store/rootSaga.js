import { all, call } from "redux-saga/effects";
import adSagas from "./Ad/ad.sagas";

export default function* rootSaga() {
  yield all([call(adSagas)]);
}
