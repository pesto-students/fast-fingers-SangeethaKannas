import React from 'react'
import { PropTypes } from "prop-types";
import { FontAwesome } from "../common/commoncomponents"
import { PlayerDetails, PlayerName, Header, AppName } from "./GameHeaderStyles";

const GameHeader = ({ name, difficulty }) => {
    return (
        <Header>
            <PlayerDetails>
                <PlayerName>
                    <FontAwesome className={'user'}/>
                    <span>{name}</span>
                </PlayerName>
                <div>
                    <FontAwesome className={'gamepad'}/>
                    <span>LEVEL : </span>
                    <span>{difficulty}</span>
                </div>
            </PlayerDetails>
            <AppName>fast fingers</AppName>
        </Header>
        )
}

GameHeader.propTypes = {
    name: PropTypes.string,
    difficulty: PropTypes.string
}

export default GameHeader;