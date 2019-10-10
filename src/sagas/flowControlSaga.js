import {
  take,
  takeEvery,
  fork,
  takeLatest,
  delay,
  cancelled,
  cancel
} from "redux-saga/effects";

export function* takeSaga() {
  while (true) {
    var { payload } = yield take("INCREMENT");
    yield delay(500);
    console.log(payload);
  }
}

function* takeEveryHandler({ payload }) {
  yield delay(500);
  console.log(payload);
}

export function* takeEverySaga() {
  yield takeEvery("DECREMENT", takeEveryHandler);
}

// takeEvery can also be implemented as take + fork
// export function* takeEveryUsingTakeAndFork() {
//   while (true) {
//     var action = yield take("DECREMENT");
//     yield fork(takeEveryHandler, action);
//   }
// }

function* takeLatestHandler({ type, payload }) {
  try {
    yield delay(500);
    console.log(payload);
  } finally {
    if (cancelled()) {
      console.log(`cancelled ${type}`);
    }
  }
}

export function* takeLatestSaga() {
  yield takeLatest("RESET", takeLatestHandler);
}

// takeLatest can also be implemented as take + fork + cancel
// export function* takeLatestUsingTakeAndFork() {
//   while (true) {
//     var action = yield take("RESET");
//     if (forked) {
//       yield cancel(forked);
//     }
//     var forked = yield fork(takeLatestHandler, action);
//   }
// }
