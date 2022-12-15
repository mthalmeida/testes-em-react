import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RenderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testa funcionalidade de componente Pokedex.js', () => {
  test('Testa veracidade da pagina', () => {
    RenderWithRouter(<App />);
    const textPokedex = screen.getByText(/Encountered pokémons/i, { selector: 'h2' });
    expect(textPokedex).toBeInTheDocument();
  });

  test('Testa funcionalidade do botão - Próximo pokémon', async () => {
    RenderWithRouter(<App />);
    const textFind0 = await screen.findByText(/Pikachu/i);
    expect(textFind0).toBeInTheDocument();

    const btnUser = await screen.findByText(/Próximo pokémon/i);

    userEvent.click(btnUser);
    const textFind1 = await screen.findByText(/Charmander/i);
    expect(textFind1).toBeInTheDocument();

    userEvent.click(btnUser);
    const textFind2 = await screen.findByText(/Caterpie/i);
    expect(textFind2).toBeInTheDocument();

    userEvent.click(btnUser);
    const textFind3 = await screen.findByText(/Ekans/i);
    expect(textFind3).toBeInTheDocument();

    userEvent.click(btnUser);
    const textFind4 = await screen.findByText(/Alakazam/i);
    expect(textFind4).toBeInTheDocument();

    userEvent.click(btnUser);
    const textFind5 = await screen.findByText(/Mew/i);
    expect(textFind5).toBeInTheDocument();
  });
});

describe('Testa funcionalidade de componente PokemonButtonsPanel.js', () => {
  test('Testa filtro ALL', async () => {
    RenderWithRouter(<App />);
    const btnFilter = await screen.findByText(/ALL/i);
    userEvent.click(btnFilter);
    const textFind = await screen.findByText(/Pikachu/i);
    expect(textFind).toBeInTheDocument();
  });

  test('Testa filtro FIRE', async () => {
    RenderWithRouter(<App />);
    const btnFilter = await screen.findByText(/Fire/i);
    userEvent.click(btnFilter);
    const textFind1 = await screen.findByText(/Charmander/i);
    expect(textFind1).toBeInTheDocument();

    const btnUser = await screen.findByText(/Próximo pokémon/i);
    userEvent.click(btnUser);
    const textFind2 = await screen.findByText(/Rapidash/i);
    expect(textFind2).toBeInTheDocument();

    userEvent.click(btnUser);
    const textFind3 = await screen.findByText(/Charmander/i);
    expect(textFind3).toBeInTheDocument();
  });

  test('Testa filtro BUG', async () => {
    RenderWithRouter(<App />);
    const btnFilter = await screen.findByText(/Bug/i);
    userEvent.click(btnFilter);
    const textFind = await screen.findByText(/Caterpie/i);
    expect(textFind).toBeInTheDocument();
  });

  test('Testa filtro POISON', async () => {
    RenderWithRouter(<App />);
    const btnFilter5 = await screen.findByText(/Poison/i);
    userEvent.click(btnFilter5);
    const textFind5 = await screen.findByText(/Ekans/i);
    expect(textFind5).toBeInTheDocument();
  });

  test('Testa filtro PSYCHIC', async () => {
    RenderWithRouter(<App />);
    const btnFilter1 = await screen.findByText(/Psychic/i);
    userEvent.click(btnFilter1);
    const textFind1 = await screen.findByText(/Alakazam/i);
    expect(textFind1).toBeInTheDocument();

    const btnUser = await screen.findByText(/Próximo pokémon/i);
    userEvent.click(btnUser);
    const textFind2 = await screen.findByText(/Mew/i);
    expect(textFind2).toBeInTheDocument();

    userEvent.click(btnUser);
    const textFind3 = await screen.findByText(/Alakazam/i);
    expect(textFind3).toBeInTheDocument();
  });

  test('Testa filtro NORMAL', async () => {
    RenderWithRouter(<App />);
    const btnFilter = await screen.findByText(/Normal/i);
    userEvent.click(btnFilter);
    const textFind = await screen.findByText(/Snorlax/i);
    expect(textFind).toBeInTheDocument();
  });

  test('Testa filtro DRAGON', async () => {
    RenderWithRouter(<App />);
    const btnFilter = await screen.findByText(/Dragon/i);
    userEvent.click(btnFilter);
    const textFind = await screen.findByText(/Dragonair/i);
    expect(textFind).toBeInTheDocument();
  });
});

describe('Testa filtragem com dataTestId', () => {
  test('Testa se botão filtra corretamente pelo dataTestId', () => {
    RenderWithRouter(<App />);
    const dataTestId = screen.getAllByTestId('pokemon-type-button');
    expect(dataTestId).toHaveLength(7);
  });
});

// npx stryker run ./stryker/Pokedex.conf.json
