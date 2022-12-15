import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import RenderWithRouter from '../renderWithRouter';

describe('Testa componente PokemonDetails.js', () => {
  test('Testa se é exibido na tela um h2 com o nome', async () => {
    RenderWithRouter(<App />);
    const btnDetails = await screen.findByText(/More details/i);
    userEvent.click(btnDetails);

    const textFind = screen.getByText(/Pikachu Details/i);
    expect(textFind).toBeInTheDocument();
    expect(btnDetails).not.toBeInTheDocument();
  });
});

// npx stryker run ./stryker/PokemonDetails.conf.json
