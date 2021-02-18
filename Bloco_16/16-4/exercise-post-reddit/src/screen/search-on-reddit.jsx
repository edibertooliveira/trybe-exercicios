import React from 'react';
import { SearchBar, PostsList } from '../components';

function index() {
  return (
    <div className="search-on-reddit">
      <SearchBar />
      <PostsList />
    </div>
  );
}

export default index;