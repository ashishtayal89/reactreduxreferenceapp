import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import initSaga from "./utils/initSaga";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

function counter(state = { counter: 0 }, action) {
  console.log(`CounterReduced : `, action);
  switch (action.type) {
    case "INCREMENT":
      return { counter: state.counter + 1 };
    case "DECREMENT":
      return { counter: state.counter - 1 };
    case "RESET":
      return { counter: 0 };
    default:
      return state;
  }
}

function user(state = { users: [], updating: false }, action) {
  console.log(`UserReduced : `, action);
  switch (action.type) {
    case "ADD":
      return { ...state, updating: true };
    case "ADD_SUCCESS":
      const users = [...state.users, action.payload.user];
      return { ...state, users, updating: false };
    case "ADD_FAILURE":
      return { ...state, updating: false };
    case "REMOVE":
      return { ...state, updating: true };
    case "REMOVE_FAILURE":
      return { ...state, updating: false };
    case "REMOVE_SUCCESS":
      if (state.users.length) {
        state.users.pop();
      }
      return {
        ...state,
        users: [...state.users],
        updating: false
      };
    default:
      return state;
  }
}

const reducer = combineReducers({ counter, user });
const saga = createSagaMiddleware();
export default createStore(reducer, composeEnhancers(applyMiddleware(saga)));
initSaga(saga);
