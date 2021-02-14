import {
  CREATE_STREAM,
  EDIT_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
  DELETE_STREAM,
} from "../actions/types";

export const streamReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAMS:
      return { ...state, ...action.payload.reduce((map, val) => ({ ...map, [val.id]: val }), {}) };

    case DELETE_STREAM:
      const { [action.payload]: id, ...newState } = state;
      return newState;

    case FETCH_STREAM:
    case CREATE_STREAM:
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };

    default:
      return state;
  }
};
