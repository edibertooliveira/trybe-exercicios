import { GET_SUBREDDIT, REQUEST_SUBREDDIT, FAILED_REQUEST } from './type'

export const requestSubreddit = () => ({
  type: REQUEST_SUBREDDIT,
})
export const getSubreddit = (children) => ({
  type: GET_SUBREDDIT,
  payload: children
})
export const failedRequest = (err) => ({
  type: FAILED_REQUEST,
  message: err
})
