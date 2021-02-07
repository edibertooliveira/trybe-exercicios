import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from '../App';

describe('Exercício 1', () => {
  test('Verificando se o botão existe', () => {
    const { getByTestId } = render(<App />);
    const btn = getByTestId('btnAdd');
    expect(btn).toBeInTheDocument();
  });
  test('Verificando se tem o texto adicionar', () => {
    const { getByTestId } = render(<App />);
    const btn = getByTestId('btnAdd');
    expect(btn).toHaveValue('Adicionar');
  });
  test('Verificando se ao ser clicado a tarefa digitada pelo o usuário precisa ser salva.', ()=>{
    const { getByTestId, getByText } = render(<App />);
    const inputText = getByTestId('inputTodo');
    const inputBtnAdd = getByTestId('btnAdd');
    fireEvent.change(inputText, { target: { value : 'beto@beto.com' } });
    fireEvent.click(inputBtnAdd);
    
    const text = getByText('beto@beto.com');
    expect(inputText.value).toBe('');
    expect(text).toBeInTheDocument();
  })
});
