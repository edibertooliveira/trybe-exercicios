import React from "react";
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux';
import listReducer from '../../reducers/listReducer.reducer';
import { render } from '@testing-library/react';

const renderWithRedux = (
  component,
  { initialState, store = createStore(combineReducers({ listReducer }), initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  }
}

export default renderWithRedux;