import types from "../constants/listReducer";

const addAssignment = (name, value) => ({ type: types.ADD_ELEMENT, name, value });
export  default addAssignment;