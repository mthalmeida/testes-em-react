import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RenderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testa componente Pokemon.js em Page/Home', () => {
  test('Testa se nome aparece na tela', async () => {
    RenderWithRouter(<App />);
    const dataTestId = screen.getByTestId(/pokemon-name/i);
    expect(dataTestId).toHaveTextContent(/Pikachu/i);
  });

  test('Testa se tipo aparece na tela', async () => {
    RenderWithRouter(<App />);
    const dataTestId = screen.getByTestId('pokemon-type');
    expect(dataTestId).toHaveTextContent('Electric');
  });

  test('Testa se peso médio aparece na tela', async () => {
    RenderWithRouter(<App />);
    const dataTestId = screen.getByTestId('pokemon-weight');
    expect(dataTestId).toHaveTextContent('Average weight: 6.0 kg');
  });

  test('Testa Imagem com src e alt corretamente', async () => {
    RenderWithRouter(<App />);
    const urlImg = 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png';
    const altImg = 'Pikachu sprite';
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', urlImg);
    expect(image).toHaveAttribute('alt', altImg);
  });

  test('Testa link com mais detalhes', async () => {
    RenderWithRouter(<App />);
    const btnMoreDetails = await screen.findByText(/More details/i);
    userEvent.click(btnMoreDetails);
    expect(btnMoreDetails.href).toBe('http://localhost/pokemons/25');
  });
});

describe('Testa componente Pokemon.js em Page/Favorite', () => {
  test('Testa src de imagem de favoritar', async () => {
    RenderWithRouter(<App />);
    const btnMoreDetails = await screen.findByText(/More details/i);
    userEvent.click(btnMoreDetails);

    const selectCheckbox = screen.getByRole('checkbox', { id: 'favorite' });
    userEvent.click(selectCheckbox);
    const imageFavorite = screen.getByAltText(/Pikachu is marked/i);
    expect(imageFavorite.src).toBe('http://localhost/star-icon.svg');

    const pageFavorite = await screen.findByText(/Favorite Pokémons/i);
    userEvent.click(pageFavorite);
    const navbarTextHome = screen.getByText(/More details/i);
    expect(navbarTextHome).toBeInTheDocument();
    expect(imageFavorite.src).toBe('http://localhost/star-icon.svg');
  });
});

// npx stryker run ./stryker/Pokemon.conf.json
