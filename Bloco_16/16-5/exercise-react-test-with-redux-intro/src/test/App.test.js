import React from 'react';
import App from '../App';
import renderWithRedux from './helper';
import { screen } from '@testing-library/react';

describe('Render com Redux', () => {
  const initialState = {
    signalReducer: {
      signal: {
        color: 'green',
      },
    },
    carReducer: {
      cars: {
        red: true,
        blue: false,
        yellow: false,
      },
    },
  };

  it('renderizar store signalReducer', () => {
    renderWithRedux(<App />);

    const imgSignal = screen.getByRole('img', {
      name: 'signal',
    });

    expect(imgSignal.src).toBe('http://localhost/redSignal.jpeg');
  });

  it('renderizar store signalReducer alterando state', () => {
    renderWithRedux(<App />, { initialState });

    const imgSignal = screen.getByRole('img', {
      name: 'signal',
    });

    expect(imgSignal.src).toBe('http://localhost/greenSignal.jpeg');
  });

  it('renderizar store carReducer', () => {
    renderWithRedux(<App />);

    const imgCarRed = screen.getByRole('img', {
      name: /red car/i,
    });

    expect(imgCarRed.src).toBe('http://localhost/carRed.jpeg');
    expect(imgCarRed.className).not.toBe('car-right');
  });

  it('renderizar store carReducer alterando state', () => {
    renderWithRedux(<App />, { initialState });

    const imgCarRed = screen.getByRole('img', {
      name: /red car/i,
    });

    expect(imgCarRed.className).toBe('car-right');
  });

  it('teste a cor', () => {
    const { store } = renderWithRedux(<App />);
    expect(store.getState().signalReducer.signal.color).toBe('red')
  })
});
