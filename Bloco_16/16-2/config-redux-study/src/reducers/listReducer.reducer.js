import types from "../constants/listReducer";

const INITIAL_STATE = [];

function listReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.ADD_ELEMENT:
      return [...state, action.value];
    default:
      return state;
  }
}

export default listReducer;