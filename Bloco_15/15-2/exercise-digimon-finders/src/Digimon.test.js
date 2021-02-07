import React from 'react';
import { render } from '@testing-library/react';
import Digimon from './Digimon';

import digimon from './mocker/digimon';

describe('Teste da tela do Digimon', () => {
  const { name, level, img } = digimon[0]
  const levelDigi = `level: ${level}`;
  
  it('renders Digimon', async () => {
    const { getByText, getByAltText } = render(<Digimon digimon={digimon[0]} />)
    expect(getByText(name)).toBeInTheDocument();
    expect(getByText(levelDigi)).toBeInTheDocument();
    expect(getByAltText(name).src).toBe(img);

  });
});