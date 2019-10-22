import { fetchPromise } from "../api";
import { take, call, put } from "redux-saga/effects";

export function* addCurrentUser() {
  while (true) {
    yield take("ADD");
    var user = yield call(fetchPromise, 1);
    yield put({ type: "ADD_SUCCESS", payload: { user: user[0] } });
  }
}

export function* removeCurrentUser() {
  while (true) {
    yield take("REMOVE");
    yield put({ type: "REMOVE_SUCCESS" });
  }
}
