import {
  ADD_TODO,
  EDIT_TODO,
  DELETE_TODO,
} from "./todo.const.js";

export function addTodo(todo) {
  return {
    type: ADD_TODO,
    todo
  }
}

export function editTodo(todo) {
  return {
    type: EDIT_TODO,
    todo
  }
}

export function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    id
  }
}
