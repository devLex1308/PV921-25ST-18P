import {
  ADD_STATION,
  EDIT_STATION,
  DELETE_STATION,
  GET_STATIONS,
} from "./station.const.js";

export function addTodo(todo) {
  return {
    type: ADD_STATION,
    todo
  }
}

export function editTodo(todo) {
  return {
    type: EDIT_STATION,
    todo
  }
}

export function deleteTodo(id) {
  return {
    type: DELETE_STATION,
    id
  }
}


export const getStations = (a) => async (dispatch, store) => {
  console.log('getStations', a, dispatch, store);

  const res = await fetch("http://localhost:3200/api/station");
  const data = await res.json();
  console.log({data});

  return {
    type: GET_STATIONS,
  }
}

