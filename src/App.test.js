import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders app name', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Fast Fingers/i);
  expect(linkElement).toBeInTheDocument();
});

