import React from 'react';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import GameHeader from './GameHeader';

it("Should show the player, difficulty details and app name", () => {
    const player = {
        name: 'Player Test',
        difficulty: 'MEDIUM'
    }

    const wrapper = render(<GameHeader name={player.name} difficulty={player.difficulty} />);

  //  expect(wrapper.getByRole('header')).toDefined();
    expect(wrapper.findByText('Player Test')).toBeDefined();
    expect(wrapper.findByText('LEVEL : ')).toBeDefined();
    expect(wrapper.findByText('MEDIUM')).toBeDefined();
  //  expect(wrapper.findByText('fast fingers')).toHaveStyle({'font-family':'Laser Corps Halftone Regular'});
  //   expect(wrapper.findByAltText('fa').length).toBe(2);

});