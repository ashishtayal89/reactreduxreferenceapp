import { select } from "redux-saga/effects";

function selector(state) {
  return state;
}

export function* selectSaga() {
  const state = yield select(selector);
  console.log("Initial State in selectSaga : ", state);
}
