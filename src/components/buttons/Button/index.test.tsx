import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { lightMode } from 'src/assets/theme';
import Button from '.';

test('renders a button', () => {
  render(
    <ThemeProvider theme={lightMode}>
      <Button text="Click Me" isDark />
    </ThemeProvider>
  );
  const buttonElement = screen.getByText(/Click Me/i);
  expect(buttonElement).toBeInTheDocument();
});
