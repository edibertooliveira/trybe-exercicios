import {
  getSubreddit,
  failedRequest,
  requestSubreddit,
} from '../store/actions/subreddit.action';
const http = (subreddit) => `https://www.reddit.com/r/${subreddit}.json`;

function fetchFromReddit(subreddit) {
  
  return async (dispatch) => {
    try {
      dispatch(requestSubreddit());
      const response = await fetch(http(subreddit));
      const result = await response.json();
      dispatch(getSubreddit(result.data.children));
    } catch {
      dispatch(failedRequest());
    }
  };
}

export default fetchFromReddit;
