import React from 'react';
import { render, cleanup } from '@testing-library/react';
import TicTacToe from '../TicTacToe';

afterEach(cleanup);

describe("Configuração inicial do jogo", () => {
  const campos = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  test('Verificar se foi renderizada nove casas', () => {
    const { getByTestId } = render(<TicTacToe />);
    campos.map(id => expect(getByTestId(`cell_${id}`)).toBeInTheDocument())
  });

  test('Começar com todos os espaços em branco.', () => {
    const {  queryByRole } = render(<TicTacToe />);
    expect(queryByRole('img')).toBeNull();
  });

  test("Começar sem a frase 'Fim de jogo'", () => {
    const { queryByText } = render(<TicTacToe />);
    expect(queryByText('Fim de Jogo')).toBeNull();
  });
});
