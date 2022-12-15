import React from 'react';
import { screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import RenderWithRouter from '../renderWithRouter';

describe('Testa se existe um conjunto fixo de links no topo da pagina', () => {
  test('Testa se o primeiro link possui o texto Home', () => {
    RenderWithRouter(<App />);
    const navbarTextHome = screen.getByText(/Home/i);
    expect(navbarTextHome).toBeInTheDocument();
  });

  test('Testa se o segundo link possui o texto About', () => {
    RenderWithRouter(<App />);
    const navbarTextAbout = screen.getByText(/About/i);
    expect(navbarTextAbout).toBeInTheDocument();
  });

  test('Testa se o terceiro link possui o texto Favorite Pokémons', () => {
    RenderWithRouter(<App />);
    const navbarTextFavorite = screen.getByText(/Favorite Pokémons/i);
    expect(navbarTextFavorite).toBeInTheDocument();
  });
});

describe('Testa funcionalidade do conjunto de links no topo da pagina', () => {
  test('Testa redirecionamento ao clicar em Home', async () => {
    RenderWithRouter(<App />);
    const navbarHome = await screen.findByText(/Home/i);
    userEvent.click(navbarHome);
    const textFindTest1 = await screen.findByText(/Average weight/i);
    expect(textFindTest1).toBeInTheDocument();
  });

  test('Testa redirecionamento ao clicar em About', async () => {
    RenderWithRouter(<App />);
    const navbarAbout = await screen.findByText(/About/i);
    userEvent.click(navbarAbout);
    const textFindTest2 = await screen.findByText(/encyclopedia/i);
    expect(textFindTest2).toBeInTheDocument();
  });

  test('Testa redirecionamento ao clicar em Favorite Pokémons', async () => {
    RenderWithRouter(<App />);
    const navbarHome = await screen.findByText(/Favorite Pokémons/i);
    userEvent.click(navbarHome);
    const textFindTest3 = await screen.findByText(/No favorite pokemon found/i);
    expect(textFindTest3).toBeInTheDocument();
  });

  test('Testa funcionalidade de pagina 404', async () => {
    RenderWithRouter(<App />);
    const { history } = RenderWithRouter(<App />);
    act(() => {
      history.push('/pagina-inexistente/');
    });
    const textFindTest404 = await screen.findByText(/Page requested not found/i);
    expect(textFindTest404).toBeInTheDocument();
  });
});

// npx stryker run ./stryker/App.conf.json
