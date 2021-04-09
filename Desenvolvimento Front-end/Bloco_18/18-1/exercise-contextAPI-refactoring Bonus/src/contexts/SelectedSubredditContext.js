import React, { createContext, Component } from 'react';

export const SelectedSubredditContext = createContext();

export class PostsBySubredditContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { children } = this.props;
    return (
      <SelectedSubredditContext.Provider>
        {children}
      </SelectedSubredditContext.Provider>
    );
  }
}
