import {
  take,
  actionChannel,
  takeEvery,
  fork,
  takeLatest,
  delay,
  cancelled,
  cancel,
  put
} from "redux-saga/effects";

export function* takeSaga() {
  while (true) {
    var { payload } = yield take("INCREMENT");
    yield delay(500);
    console.log(payload);
  }
}

// This is used to buffer the actions so that the actions are not lost if saga is buisy executing
// export function* takeActionChannelSaga() {
//   var chan = yield actionChannel("INCREMENT");
//   while (true) {
//     var { payload } = yield take(chan);
//     yield delay(500);
//     console.log(payload);
//   }
// }

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
    yield put({ type: "RESET", payload });
  } finally {
    if (cancelled()) {
      console.log(`cancelled ${type}`);
    }
  }
}

// export function* takeLatestSaga() {
//   yield takeLatest("RESET_INIT", takeLatestHandler);
// }

// takeLatest can also be implemented as take + fork + cancel
// export function* takeLatestUsingTakeForkAndCancel() {
//   while (true) {
//     var action = yield take("RESET_INIT");
//     if (forked) {
//       yield cancel(forked);
//     }
//     var forked = yield fork(takeLatestHandler, action);
//   }
// }

// A custom implementation to cancel request based on action payload
export function* takeLatestUsingTakeAndFork() {
  var forked = {};
  while (true) {
    var action = yield take("RESET_INIT");
    var { payload } = action;
    if (forked[payload]) {
      yield cancel(forked[payload]);
      delete forked[payload];
    }
    forked[payload] = yield fork(takeLatestHandler, action);
  }
}
