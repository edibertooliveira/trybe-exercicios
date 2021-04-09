// src/App.js
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchDog } from './store';
import useFetch from './hook/useFetch';


function App({ isFetching, src, fetchDog }) {
  const { request, data, loading } = useFetch();
  useEffect(()=> request('https://dog.ceo/api/breeds/image/random'),[])
  return (
    loading ? <p>Loading</p>
      : (
        <div style={{ width: 500 }}>
          <button
            style={{ display: 'block' }}
            onClick={()=> request('https://dog.ceo/api/breeds/image/random')}
            type="button"
          >
            Novo Doguinho
          </button>
          <img style={{ width: '100%' }} src={data.message} alt="dog" />
        </div>
      )
  );
}

const mapStateToProps = (state) => ({
  src: state.imagePath,
  isFetching: state.isFetching});

const mapDispatchToProps = (dispatch) => ({
  fetchDog: () => dispatch(fetchDog())});

export default connect(mapStateToProps, mapDispatchToProps)(App);
