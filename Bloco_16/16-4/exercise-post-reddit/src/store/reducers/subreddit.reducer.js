import { GET_SUBREDDIT, REQUEST_SUBREDDIT, FAILED_REQUEST } from '../actions/type'

const INITIAL_STATE = {
  isLoading: false,
  posts: [],
  error: false
}

export default function subreddit(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_SUBREDDIT:
      return {
        ...state, 
        isLoading: true,
        error: false,
      }
    case GET_SUBREDDIT:
      console.log(action.payload);
      return {
        ...state, 
        posts: action.payload, 
        isLoading: false
      }
    case FAILED_REQUEST:
      return {
        ...state, 
        error: true,
        isLoading: false
      }
    default:
      return state;
  }
}