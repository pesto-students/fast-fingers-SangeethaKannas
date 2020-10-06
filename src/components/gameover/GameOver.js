import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import GameHeader from "../gameheader/GameHeader";

const GameOver = props => {
    let { gameIndex, gameScore, highScore = false } = props.location.state;
    let { name, difficulty } = typeof props.location.state !== 'undefined' ? props.location.state : {
        name: sessionStorage.getItem('name'),
        difficulty: sessionStorage.getItem('difficulty')
    };


    return (
        <section className="game-over">
            <GameHeader name={name} difficulty={difficulty} />

            <header className="header">SCORE : GAME {gameIndex}</header>
            <div className="score">{gameScore}</div>
            {
                highScore === true ? <div className="new-high-score">New High Score</div> : ""
            }
            <Link to='/game' >
                <button className="play-again">Play Again</button>
            </Link>
        </section>
    )

};

export default GameOver;