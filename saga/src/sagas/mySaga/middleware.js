export function runSaga(saga, ...arg) {
  let sagaInstance = saga(...arg);
  let sagaName = saga.name;
  if (isIterable(sagaInstance)) {
    executeSaga(sagaInstance, sagaName);
  }
}

function isIterable(obj) {
  if (!obj) {
    return false;
  }
  return typeof obj[Symbol.iterator] === "function";
}

function executeSaga(saga, sagaName) {
  do {
    const iteration = saga.next();
    var isDone = iteration.done;
    const value = iteration.value;
    const effect = value ? value.effect : undefined;
    if (effect) {
      switch (effect) {
        case "delay": {
          const { timeStamp } = value;
          setTimeout(executeSaga, timeStamp, saga, sagaName);
          return;
        }
        case "call": {
          const { func, arg } = value;
          if (typeof func == "function") {
            func(...arg);
          }
          break;
        }
        case "spawn": {
          const { func, arg } = value;
          if (typeof func == "function") {
            setTimeout(
              () => {
                runSaga(func, ...arg);
              },
              0,
              arg
            );
          }
          break;
        }
        default:
          break;
      }
    }
  } while (!isDone);
  console.log(`Done Executing ${sagaName} saga`);
}
