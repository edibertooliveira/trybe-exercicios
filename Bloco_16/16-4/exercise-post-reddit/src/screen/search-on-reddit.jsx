import React from 'react';
import { SearchBar, PostsList } from '../components';
import '../styles/searchOnReddit.css'

function index() {
  return (
    <div className="searchOnReddit">
      <SearchBar />
      <PostsList />
    </div>
  );
}

export default index;