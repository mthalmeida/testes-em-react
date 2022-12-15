import React from 'react';
import { screen } from '@testing-library/react';
import RenderWithRouter from '../renderWithRouter';
import { FavoritePokemons } from '../pages';

describe('Testa funcionalidade do componente FavoritePokemons.js', () => {
  test('Testa se é exibida a mensagem - No favorite pokemon found', () => {
    RenderWithRouter(<FavoritePokemons />);
    const textFind = screen.getByText(/No favorite pokemon found/i);
    expect(textFind).toBeInTheDocument();
  });
});

// npx stryker run ./stryker/FavoritePokemons.conf.json
