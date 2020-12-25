import React from 'react';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import Game from "./Game";

//Start Games
it ('should create Game UI and start game', () => {
  const wrapper = render(<Game />);

  expect(wrapper.getByRole('textbox')).toHaveFocus();
});


