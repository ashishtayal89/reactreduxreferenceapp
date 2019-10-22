import { call, fork, delay } from "redux-saga/effects";

function* effectLog(effect) {
  yield delay(1000);
  console.log(effect + " Effect");
}

export function* callSaga() {
  for (let i = 0; i < 5; i++) {
    yield call(effectLog, "call");
  }
  console.log("call complete");
}

export function* forkSaga() {
  for (let i = 0; i < 5; i++) {
    yield fork(effectLog, "fork");
  }
  console.log("fork complete");
}
