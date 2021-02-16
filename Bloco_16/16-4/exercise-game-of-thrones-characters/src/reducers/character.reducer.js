import { REQUEST_API, GET_CHARACTER} from '../actions/constants/api'

const INITIAL_STATE = {
  isLoading: false,
  persona: '',
  error: true,
};

function character(state = INITIAL_STATE, action) {
  switch (action.type) {
  case REQUEST_API:
    return {
      ...state,
      isLoading: true,
    };
  case GET_CHARACTER:
    return {
      ...state,
      isLoading: false,
      persona: action.data,
    };
  default:
    return state;
  }
}

export default character
