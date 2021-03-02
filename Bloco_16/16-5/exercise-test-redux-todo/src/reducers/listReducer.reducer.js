import types from "../constants/listReducer";

const initialState = {
  list: []
};

export default function listReducer(state = initialState, { type, value }) {
  switch (type) {
    case types.ADD_ELEMENT:
      return { ...state, list: [...state.list, value] };
    default:
      return state;
  }
}