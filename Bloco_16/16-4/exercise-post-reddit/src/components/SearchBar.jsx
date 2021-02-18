import React from 'react';
import { connect } from 'react-redux';
import fetchApi from '../services/getApi';

function SearchBar(props) {
  const [search, setSearch] = React.useState('');
  const { fetch } = props;
  return (
    <div className="search-bar">
      <input
        type="search"
        name="search"
        id="id-search"
        value={search}
        placeholder="Search..."
        onChange={({ target }) => setSearch(target.value)}
      />
      <button onClick={() => fetch(search) }>go!</button>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => ({
  fetch: (text) => dispatch(fetchApi(text)),
});

export default connect(null, mapDispatchToProps)(SearchBar);
