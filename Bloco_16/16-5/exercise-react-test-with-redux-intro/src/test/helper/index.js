import React from "react";
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux';
import { signalReducer, carReducer } from '../../redux';
import { render } from '@testing-library/react';

const renderWithRedux = (
  component,
  { initialState, store = createStore(combineReducers({signalReducer, carReducer}), initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  }
}

export default renderWithRedux;