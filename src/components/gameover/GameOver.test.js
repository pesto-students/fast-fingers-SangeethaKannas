import React from 'react';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import GameOver from './GameOver';

it("should not show score and play again button", () => {
    location = {
        state: {
            gameIndex: 10,
            gameScore: 200,
            highScore: false,
            name: 'TestUser',
            difficulty: 'Easy'
        }
    }
    const wrapper = render(<GameOver gameIndex={5} gameScore={2.11} location={location} />)
});

it("should not show high score and play again button", () => {
    const wrapper = render(<GameOver gameIndex={6} gameScore={2.00} highScore={true} />)
});
