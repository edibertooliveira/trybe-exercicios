import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { PostsBySubredditProvader } from './contexts/PostsBySubredditContext';

import App from './App';
import store from './store';

render(
  <Provider store={store}>
    <PostsBySubredditProvader>
      <App />
    </PostsBySubredditProvader>
  </Provider>,
  document.getElementById('root')
);
