import {
  ADD_STATION,
  EDIT_STATION,
  DELETE_STATION,
  GET_STATIONS,
} from "./todo.const.js";

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


export function getStations(id) {
  return {
    type: GET_STATIONS,
    id
  }
}

