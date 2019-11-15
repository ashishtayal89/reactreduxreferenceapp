export function runSaga(saga, ...arg) {
  let sagaInstance = saga(...arg);
  if (isIterable(sagaInstance)) {
    let sagaName = saga.name;
    iterateSaga(sagaInstance, sagaName);
  }
}

function isIterable(obj) {
  if (!obj) {
    return false;
  }
  return typeof obj[Symbol.iterator] === "function";
}

function iterateSaga(saga, sagaName) {
  let yieldValue;
  do {
    const iteration = saga.next(yieldValue);
    var isDone = iteration.done;
    var value = iteration.value;
    const effect = value ? value.effect : undefined;
    if (effect) {
      switch (effect) {
        case "delay": {
          const { timeStamp } = value;
          setTimeout(iterateSaga, timeStamp, saga, sagaName);
          return;
        }
        case "call": {
          yieldValue = handleCall(value);
          break;
        }
        case "spawn": {
          handleSpawnAndFork(value);
          break;
        }
        case "fork": {
          yieldValue = handleSpawnAndFork(value);
          break;
        }
        case "cancel": {
          const { task } = value;
          clearTimeout(task);
          break;
        }
        default:
          break;
      }
    }
  } while (!isDone);
  console.log(`Done Executing ${sagaName} saga`);
  return value;
}

function handleCall(value) {
  const { func, arg } = value;
  let sagaResponse;
  if (typeof func == "function") {
    sagaResponse = runSaga(func, ...arg);
  }
  return sagaResponse;
}

function handleSpawnAndFork(value) {
  const { func, arg } = value;
  let task;
  if (typeof func == "function") {
    task = setTimeout(
      () => {
        runSaga(func, ...arg);
      },
      0,
      arg
    );
  }
  return task;
}
