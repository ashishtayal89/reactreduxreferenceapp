## Important saga effects with detailed analysis

### Saga

- Saga in general term is a generator function which is run using the saga middleware. Eg :

  ```javascript
  export function* currentUserSaga() {
    console.info("User saga loop");
  }
  ```

- Step to run a saga :

  1. Import saga middleware from redux-saga.

  ```javascript
  import createSagaMiddleware from "redux-saga";
  import { createStore, applyMiddleware } from "redux";
  ```

  2. Initiate saga middleware and add it to the store using applyMiddleware.

  ```javascript
  const saga = createSagaMiddleware();
  export default createStore(counter, { counter: 0 }, applyMiddleware(saga));
  ```

  3. Run/Initialize all the sagas or generator functions.

`Note : You need to run all the sagas that you want to use in the saga middleware`

### Effects

- When you invoke an effect it return an object which is a set of instruction for redux-saga to perform certain action. It is passed using the yield keyword. Redux saga middleware then interprets these instructions and generates the sideeffects according to them.
- The effect itself doesn't actully do anything other than returning a set of instructions.
- Types :
  ![Capture](https://user-images.githubusercontent.com/46783722/66543473-1b0a8d00-eb53-11e9-9d37-d96ae0e05648.PNG)

| THEAD MANAGEMENT                                                                  | ACTION CREATOR         | DATA SEEDING                | FLOW CONTROL                                                                                       |
| --------------------------------------------------------------------------------- | ---------------------- | --------------------------- | -------------------------------------------------------------------------------------------------- |
| These effect result in the creation of new threads or yielding of current thread. | Used to create actions | Used to get data from store | Pauses exection of code or forks now code based on when actions are dispatched in the application. |

`Note : Effects are not of any use outside a saga`

### Effects listing

1. Thread Management :

   - Call : It just calls the specified method. Very similar to invoking the method directly. We use call instead of directly calling the function because it helps in testing. If the response to the called function is a promise then the call will pause till the time that promise is resolved and it yield the value resolved by the promsie.
     `call(fn, ...args)`
   - Apply : It is similar to call except it can bind the context to the function you want to call.
     `apply(context, fn, args)`
   - Fork : Similar to call with some differences
     - The code continued to run even if the called function is not done executing. This is specifically helpfull if you need to make multiple api calls in parallel and the order of the api calls is insignificant.
     - So you cann't capture the yielded value of a fork.
     - If the parent process of a forked process has errored or is cancelled then all the forked process are also cancelled or errored. The finally block of the forked process is used incase of cancellation.
   - Spawn : It creates a new process just like fork, but the new process is not a child of the process which creates it. So if the parent process is cancelled or errors the child process will still continue to execute.
   - Cancel : Cancels a forked process.
     - Cancelled process will termiate at the very next yield it encounters.
     - When you cancel a forked process its finally block is invoked. This helps you to respond to the cancel.
     - If you cancel a process, you also cancel all the processes create of it.
     - Cancelled is a function which returns true if the process/function it was called in was cancelled. This is generally used in the finally block to determine if the fork was cancelled or some unhandled error was reponsible for the process to be stopped.

2) Action creator :

   - Put : This is used to dispatch a new action. It doesn't pause the thread. Put is resolved after the reducer is fired ,but before re-render.
     `Note : take and put can be used to pass information from one saga to another.`

3) Data Seeding :

   - Select : This effect is used to access the current state of the store. It accepts a selector function whose first argument is the current state of the store. The return value of this function is the value yielded by the select effect.

4) Flow Control :

   - Take : This effect doesn't create additional thread but pause the original thread. The properties of the action are passed to the running saga. Take is resolved after the reducer is fired, but before re-render.
   - Takeevery : `Take + Fork`. Yes we can consider takeevery as a combination of take and fork. It forks a new thread everytime it encounter a new relevant action.
