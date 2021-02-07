import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from '../App';
import Item from '../Item';

describe('Exercício 2', ()=> {
  const listTodo = ['Realizar CR', 'Ler Post no Medium', 'Beber água'];

  test('Simule a adição de todas e depois verifique se elas estão aparecendo.', () => {
    const { getByTestId, getByText} = render(<App />);
    const inputTodo = getByTestId('inputTodo');
    const btnAdd = getByTestId('btnAdd');
    listTodo.map(item => {

      fireEvent.change(inputTodo, {target:{ value: item }})
      fireEvent.click(btnAdd)
      
      expect(inputTodo).toHaveValue('')
      expect(getByText(item)).toBeInTheDocument()
    })
  });

  test('Ao passar uma string para componente Item, ele precisa aparecer na tela.', () => {
    const { getByText } = render(<Item content={listTodo[0]} />);

    expect(getByText(listTodo[0])).toBeInTheDocument();
  });
})