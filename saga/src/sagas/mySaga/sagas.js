import { delay, call, spawn } from "./effects";

function logValue(value) {
  console.log(value);
}

export function* saga1() {
  yield delay(1000);
  yield call(logValue, 1);
  yield delay(3000);
  yield call(logValue, 2);
}

export function* saga2() {
  yield delay(1000);
  yield spawn(logValue, 1);
  yield delay(3000);
  yield spawn(logValue, 2);
}
