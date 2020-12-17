import { createStore, combineReducers  } from 'redux';

import { todos } from "../reducers/todos.js";
import { stations } from "../reducers/stations.js";

export const store = createStore(
  combineReducers ({
    todos,
    stations
  })
);

