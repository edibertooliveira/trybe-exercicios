import React from 'react'
import { cleanup } from '@testing-library/react';
import App from './App';
import renderWithRedux from './helper'

describe('testing clicks', () => {
  beforeEach(cleanup);
  test('the page should has a button and a text 5', () => {
    const initialState = {
      clickReducer: {
        counter: 5
      }
    }

    const { queryByText } = renderWithRedux(<App />, { initialState });
    const buttonAdicionar = queryByText('Clique aqui');

    expect(buttonAdicionar).not.toBeNull();
    expect(queryByText('5')).not.toBeNull();
  });
});