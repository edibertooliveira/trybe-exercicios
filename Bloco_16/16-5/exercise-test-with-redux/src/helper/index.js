import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux';
import clickReducer from '../store/reducers';
import { render } from '@testing-library/react';

const renderWithRedux = (
  component,
  { initialState, store = createStore(combineReducers({ clickReducer }), initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  }
}

export default renderWithRedux;