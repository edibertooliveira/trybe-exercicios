import React from 'react';

const search = {
  background: 'none',
  border: '0',
  borderRadius: '6px',
  boxShadow: 'none',
  color: 'inherit',
  fontSize: 'inherit',
  height: '100%',
  paddingBottom: '0',
  paddingTop: '0',
  width: '100%',
}

const contentSearch = {
  border: '1px solid #fff',
  borderRadius: '6px',
  margin: '0 10px',
  width: '100%'
}

function Search(props) {
  return (
    <div style={ contentSearch }>
      <input style={ search } type="search" {...props} />
    </div>
  );
}

export default Search;
