import {
  ADD_ROUT,
  EDIT_ROUT,
  DELETE_ROUT,
  GET_ROUTS,
  GET_ROUT,
} from "../actions/rout.const.js";


export function routs(state = routsDefault, action) {
    console.log(action);
  switch (action.type) {
    case ADD_ROUT:
      return state;

    case EDIT_ROUT:
      return state;

    case DELETE_ROUT:
      return state;
      case GET_ROUT:
      case GET_ROUTS:
      return {
        ...state,
        ...action.payload.routs,
      };
    default:
      return state
  }
}

const routsDefault = {
}