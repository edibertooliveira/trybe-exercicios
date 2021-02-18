import React from 'react';
import { connect } from 'react-redux';
import Button from './Button';
import Search from './Search';
import fetchApi from '../../services/getApi';

const header = {
  display: 'flex',
  overflowY: 'hidden',
  width: '100%',
  bgOpacity: '1',
  backgroundColor: '#24292e',
};

const searchBar = {
  display: 'flex',
  fontSize: '14px',
  padding: '16px 0',
  lineHeight: '1.5',
  color: 'rgb(0, 0%, 100%, 0.7)',
};

const img = {
  width: '45px',
  margin: '10px',
  paddingLeft: '40px',
};

function SearchBar(props) {
  const [search, setSearch] = React.useState('');
  const { fetch } = props;
  return (
    <div style={header}>
      <img
        style={img}
        src="https://logodownload.org/wp-content/uploads/2018/02/reddit-logo-16.png"
        alt="logo"
      />
      <div style={searchBar}>
        <Search
          name="search"
          id="id-search"
          value={search}
          placeholder="Search..."
          onChange={({ target }) => setSearch(target.value)}
        />
        <Button name="ok" onClick={() => fetch(search)} />
      </div>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => ({
  fetch: (text) => dispatch(fetchApi(text)),
});

export default connect(null, mapDispatchToProps)(SearchBar);
