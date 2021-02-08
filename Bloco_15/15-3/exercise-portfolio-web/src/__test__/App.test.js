import React from 'react';
import { fireEvent } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('teste da aplicação toda.', () => {
  test('Rota para a page iniciar', () => {
    const { getByText, history } = renderWithRouter(<App />);
    fireEvent.click(getByText(/Inicio/gi));

    const { pathname } = history.location;
    expect(pathname).toBe('/');
    expect(getByText(/Portfolio/i)).not.toBeNull();
  });

  test('Rota para a page Projetos', () => {
    const { getByText, history } = renderWithRouter(<App />);
    fireEvent.click(getByText(/Projetos/gi));

    const { pathname } = history.location;
    expect(pathname).toBe('/page/projects');
    expect(getByText(/Lista de Projetos/i)).not.toBeNull();
  });

  test('Rota para a page Sobre mim', () => {
    const { getByText, history } = renderWithRouter(<App />);
    fireEvent.click(getByText(/Sobre mim/));

    const { pathname } = history.location;
    expect(pathname).toBe('/page/about');
    expect(getByText(/Ediberto/i)).not.toBeNull();
  });

  test('Rota para a page Contato', () => {
    const { getByText, history } = renderWithRouter(<App />);
    fireEvent.click(getByText(/Contato/));

    const { pathname } = history.location;
    expect(pathname).toBe('/page/contact');
    expect(getByText(/telefone ou email/i)).not.toBeNull();
  });
});
