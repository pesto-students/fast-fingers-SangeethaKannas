import React from 'react';
import { render } from "enzyme";
import GameOver from './GameOver';

it("should not show score and play again button", () => {
    const wrapper = render(<GameOver gameIndex={5} gameScore={2.11} />)
    expect(wrapper.find('button').text()).toBe('Play Again');
    expect(wrapper.find('.header').text()).toBe('SCORE : GAME 5');
    expect(wrapper.find('.score').text()).toBe('2: 11');
    expect(wrapper.find('.new-high-score').exists()).toEqual(false);
});

it("should not show high score and play again button", () => {
    const wrapper = render(<GameOver gameIndex={6} gameScore={2.00} highScore={true} />)
    expect(wrapper.find('button').text()).toBe('Play Again');
    expect(wrapper.find('.header').text()).toBe('SCORE : GAME 5');
    expect(wrapper.find('.score').text()).toBe('2: 11');
    expect(wrapper.find('.new-high-score').text()).toBe('NEW HIGH SCORE')
});
