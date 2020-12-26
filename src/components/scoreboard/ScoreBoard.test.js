import React from 'react';
import { render } from '@testing-library/react'
import ScoreBoard from './ScoreBoard';
import 'jest-styled-components'

it("should not show score board when no games exist", () => {
    const wrapper = render(<ScoreBoard />)
    expect(wrapper.findBy('.score').children().length).toBe(0);
});

it("should Show score board when there is only one game", () => {
    const games = [1.14];
    const wrapper = render(<ScoreBoard games={games} />)
    expect(wrapper.findBy('.score').children().length).toBe(1);
  //  expect(wrapper.find('<li>')[0]).has('Game 1 : 1.14')
});