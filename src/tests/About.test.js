import React from 'react';
import { screen } from '@testing-library/react';
import RenderWithRouter from '../renderWithRouter';
import { About } from '../pages';

describe('Testa se a página contém as informações sobre a Pokédex', () => {
  test('Testa se contém um heading h2 com o texto About Pokédex', () => {
    RenderWithRouter(<About />);
    const navbarTextHome = screen.getByText(/About Pokédex/i, { selector: 'h2' });
    expect(navbarTextHome).toBeInTheDocument();
  });

  test('Testa veracidade do caminho src da imagem', () => {
    RenderWithRouter(<About />);
    const urlImg = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', urlImg);
  });
});

// npx stryker run ./stryker/About.conf.json
