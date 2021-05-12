import React from 'react';
import { screen } from '@testing-library/react';
import { render } from './test-utils';
import App from './App';

test('renders logo', () => {
  render(<App />);
  const linkElement = screen.getByText(/BIG SHOP!/i);
  expect(linkElement).toBeInTheDocument();
});
