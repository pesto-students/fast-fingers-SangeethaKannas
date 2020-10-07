import React from 'react';
import { render } from "enzyme";
import GameHeader from './GameHeader';

it("Should show the player details", () => {
    const player = {
        name: 'Player Test',
        difficulty: 'MEDIUM'
    }

    const wrapper = render(<GameHeader name={player.name} difficulty={player.difficulty} />);

    expect(wrapper.find('.player-name').text()).toBe('Player Test')
    expect(wrapper.find('.difficulty-level').text()).toBe('MEDIUM')
})