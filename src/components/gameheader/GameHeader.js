import React from 'react'
import { PropTypes } from "prop-types";

const GameHeader = ({ name, difficulty }) => {
    return (
        <header className="game-header">
            <div>
                <div className="player-name"><span>{name}</span></div>
                <div><span>LEVEL : </span><span className="difficultylevel">{difficulty}</span></div>
            </div>
            <span className="app-name">fast fingers</span>
        </header>
    )
}

GameHeader.propTypes = {
    name: PropTypes.string,
    difficulty: PropTypes.string
}

export default GameHeader;