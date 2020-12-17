import {
  ADD_TODO,
  EDIT_TODO,
  DELETE_TODO,
  TOGGLE_TODO
} from "../actions/todo.const.js";

export function todos(state = [], action) {

  switch (action.type) {
    case ADD_TODO:
      return state.concat([action.todo])
    case EDIT_TODO:
      return state.reduce((acc, todo) => {
        if (todo.id == action.todo.id) {
          acc.push(action.todo);
        } else {
          acc.push(todo);
        }
        return acc;
      }, []);
    case DELETE_TODO:
      return state.filter(todo => todo.id!=action.id);
    case TOGGLE_TODO:
      return state.reduce((acc, todo) => {
        if (todo.id == action.id) {
          acc.push({...todo, isDone: !todo.isDone});
        } else {
          acc.push(todo);
        }
        return acc;
      }, []);
    default:
      return state
  }
}