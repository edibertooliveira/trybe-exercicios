import React from 'react';
import App from '../App';
import renderWithRedux from './helper';
import { screen } from '@testing-library/react';

describe('Render com Redux', () => {
  test('renderizar store listReducer', async () => {
    const initialState = {
      listReducer: { list: ['beto'] },
    };
    renderWithRedux(<App />, { initialState });

    const buttonAddTodo = screen.getByRole('button', {
      name: /adicionar tarefa/i,
    });
    const textBox = screen.getByRole('textbox');
    const textTodo = await screen.findByTestId('item-tudo');

    expect(buttonAddTodo).toBeInTheDocument();
    expect(textBox).toBeInTheDocument();
    expect(textTodo.textContent).toBe('beto');
  });
});
