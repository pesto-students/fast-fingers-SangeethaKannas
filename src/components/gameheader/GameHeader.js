import React from 'react'
import { PropTypes } from "prop-types";
import { FontAwesome } from "../common/commoncomponents"
import './gameheader.css'

const GameHeader = ({ name, difficulty }) => {
    return (
        <header className="game-header">
            <div className="player-details">
                <div className="player-name">
                    <FontAwesome className={'user'}/>
                    <span>{name}</span>
                </div>
                <div>
                    <FontAwesome className={'gamepad'}/>
                    <span>LEVEL : </span>
                    <span className="difficultylevel">{difficulty}</span>
                </div>
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