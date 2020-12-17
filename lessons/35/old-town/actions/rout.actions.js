import {
  ADD_ROUT,
  EDIT_ROUT,
  DELETE_ROUT,
  GET_ROUTS,
  GET_ROUT,
} from "./rout.const.js";

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


export const getRouts = (a) => async (dispatch, store) => {
  // console.log('getStations', a, dispatch, store);

  const res = await fetch("http://localhost:3200/api/rout");
  const text = await res.text();
  try {
    const data = JSON.parse(text);

    dispatch({
      type: GET_ROUTS,
      payload: {
        routs: data,
      }
    });
  } catch (e) {
    return dispatch({
      type: 'VOID',
      payload: {}
    });
  }
}

export const getRout = (routId) => async (dispatch, store) => {
  // console.log('getStations', a, dispatch, store);

  const res = await fetch(`http://localhost:3200/api/rout/${routId}`);
  const text = await res.text();
  try {
    const data = JSON.parse(text);

    dispatch({
      type: GET_ROUT,
      payload: {
        routs: {
          [routId]: data
        },
      }
    });
  } catch (e) {
    return dispatch({
      type: 'VOID',
      payload: {}
    });
  }
}
