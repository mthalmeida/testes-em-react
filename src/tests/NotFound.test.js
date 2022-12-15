import React from 'react';
import { screen } from '@testing-library/react';
import RenderWithRouter from '../renderWithRouter';
import NotFound from '../pages/NotFound';

describe('Testa funcionalidade de componente NotFound.js', () => {
  test('Testa se é exibido na tela um h2 com o texto Page requested not found', () => {
    RenderWithRouter(<NotFound />);
    const textNotFound = screen.getByText(/Page requested not found/i, { selector: 'h2' });
    expect(textNotFound).toBeInTheDocument();
  });

  test('Testa veracidade do caminho src da imagem', () => {
    RenderWithRouter(<NotFound />);
    const urlImg = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', urlImg);
  });
});

// npx stryker run ./stryker/NotFound.conf.json
