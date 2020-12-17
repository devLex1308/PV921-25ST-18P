import { createStore, combineReducers, applyMiddleware  } from 'redux';

import { todos } from "../reducers/todos.js";
import { stations } from "../reducers/stations.js";
import { routs } from "../reducers/routs.js";

const asyncFunctionMiddleware = storeAPI => next => action => {
  // If the "action" is actually a function instead...
  if (typeof action === 'function') {
    // then call the function and pass `dispatch` and `getState` as arguments
    return action(storeAPI.dispatch, storeAPI.getState);
  }

  // Otherwise, it's a normal action - send it onwards
  return next(action);
}

const middlewareEnhancer = applyMiddleware(asyncFunctionMiddleware);

export const store = createStore(
  combineReducers ({
    todos,
    stations,
    routs
  }), middlewareEnhancer
);

