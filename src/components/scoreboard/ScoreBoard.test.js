import React from 'react';
import { render } from "enzyme";
import ScoreBoard from './ScoreBoard';

it("should not show score board when no games exist", () => {
    const wrapper = render(<ScoreBoard />)
    expect(wrapper.find('.empty-games').text()).toBe('');
});

it("should Show score board when there is only one game", () => {
    const games = [{
        score: 1.14
    }];
    const wrapper = render(<ScoreBoard games={games} />)
    expect(wrapper.find('.game').length).toEqual(1);
    expect(wrapper.find('.game').children[0].text()).toBe('Game 1 : 1.14')
});