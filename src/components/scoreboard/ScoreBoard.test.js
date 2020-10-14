import React from 'react';
import { mount } from "enzyme";
import ScoreBoard from './ScoreBoard';
import 'jest-styled-components'

it("should not show score board when no games exist", () => {
    const wrapper = mount(<ScoreBoard />)
    expect(wrapper.find('Score').length).toBe(0);
});

it("should Show score board when there is only one game", () => {
    const games = [1.14];
    const wrapper = mount(<ScoreBoard games={games} />)
    console.log(wrapper.debug())
    expect(wrapper.find('<li>').length).toEqual(1);
  //  expect(wrapper.find('<li>')[0]).has('Game 1 : 1.14')
});