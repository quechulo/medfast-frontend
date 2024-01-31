import React from 'react';
import { screen } from '@testing-library/react';
import App from './App';
import { renderWithProviders } from './test/testUtils';

test('renders login page', () => {
  renderWithProviders(<App />, { route: '/' });
  const linkElement = screen.getByText(/Login/i);
  expect(linkElement).toBeInTheDocument();
});
