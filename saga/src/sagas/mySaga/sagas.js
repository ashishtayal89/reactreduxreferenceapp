import { delay, call, spawn, fork, cancel } from "./effects";

function logValue(value) {
  console.log(value);
}

export function* saga1() {
  yield call(logValue, 1);
  yield delay(3000);
  yield call(logValue, 2);
}

export function* saga2() {
  const task = yield fork(saga1);
  yield cancel(task);
}
