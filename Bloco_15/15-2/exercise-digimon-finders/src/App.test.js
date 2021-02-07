import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';
import digimon from './mocker/digimon';

describe('Teste da aplicação toda', () => {

  it('renders App', async () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Faça uma pesquisa/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('comportamento do formularios', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(digimon)
    });
    
    const { getByTestId, findByText } = render(<App />);
    const inputSearch = getByTestId('input');
    const btnSearch = getByTestId('buttonSearch');

    expect(inputSearch).toBeInTheDocument();
    expect(btnSearch).toBeInTheDocument();

    fireEvent.change(inputSearch, { target: { value: 'agumon' } })
    fireEvent.click(btnSearch)
    
    await findByText(/agumon/gi);
    expect(getByTestId('input')).toHaveValue('');

  })

});

