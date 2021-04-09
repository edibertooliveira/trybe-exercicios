import React, { createContext, Component } from 'react';
import { getPostsBySubreddit } from '../services/redditAPI';

export const PostsBySubredditContext = createContext();

export class PostsBySubredditProvader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldRefreshSubreddit: false,
      isFetching: false,
    };
  }

  fetchPosts(subreddit) {
    this.setState(
      (state) => ({
        ...state,
        shouldRefreshSubreddit: false,
        isFetching: true,
      }),
      () => {
        return getPostsBySubreddit(subreddit).then(
          (posts) =>
            this.setState((state) => ({
              ...state,
              shouldRefreshSubreddit: false,
              items: posts.data.children.map((child) => child.data),
              isFetching: false,
              lastUpdated: Date.now(),
            })),
          (error) =>
            this.setState((state) => ({
              ...state,
              shouldRefreshSubreddit: false,
              error: error.message,
              items: [],
              isFetching: false,
            }))
        );
      }
    );
  }

  render() {
    const { children } = this.props;
    return (
      <PostsBySubredditContext.Provider value={{ ...this.state }}>
        {children}
      </PostsBySubredditContext.Provider>
    );
  }
}
