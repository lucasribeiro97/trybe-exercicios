import { screen } from '@testing-library/react';
import renderWithRouter from './utils/renderWithRouter';

import App from './App';

it('Renderiza texto da página inicial', async () => {
  const { user } = renderWithRouter(<App />);

  expect(screen.getByText(/Você está na página Início/i)).toBeInTheDocument();

  const aboutLink = screen.getByRole('link', { name: /Sobre/i});
  await user.click(aboutLink);
  expect(screen.getByText(/Você está na página Sobre/i)).toBeInTheDocument();
})
