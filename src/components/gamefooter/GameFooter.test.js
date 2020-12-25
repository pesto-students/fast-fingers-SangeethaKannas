import React from 'react';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import GameFooter from "./GameFooter";

it ('should create game footer', () => {
  const wrapper = render(<GameFooter />);
  expect(wrapper.getAllByAltText('fa').length).toEqual(2);
  expect(wrapper.getAllByText('STOP GAME')).toBeDefined();
});
