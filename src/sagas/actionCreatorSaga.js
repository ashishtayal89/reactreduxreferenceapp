import { put } from "redux-saga/effects";

export function* putSaga() {
  yield put({ type: "INCREMENT", payload: "From putSaga" });
  yield put({ type: "DECREMENT", payload: "From putSaga" });
}
