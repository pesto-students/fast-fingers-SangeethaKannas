import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../common/commoncomponents';
import styled from 'styled-components'
import './startgame.css';

const StartButton = styled(Button)`
    text-align: center;
    color: var(--action-color);
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    text-decoration: none;

    &:disabled {
        cursor: not-allowed;
    }
`

const RightArrow = styled.span`
    width: 0;
    height: 0;
    border-top: 1rem solid transparent;
    border-bottom: 1rem solid transparent;
    border-left: 1.4rem solid var(--action-color);
    margin-right: 1rem;
    display: inline-block;
    border-radius: 6px;
`;

const AppTitle = styled.h1`
    margin-top: 0;
    margin-bottom: -2px;
    color: var(--action-color);
    font-size: 3rem;
    font-weight: normal;
    text-align: left;
    font-family:'Laser Corps Halftone Regular';
`

//TODO: Move this to a service
const getNameFromSessionStorage = () => sessionStorage.getItem('name');

const storeInSession = (name, difficulty) => {
    sessionStorage.setItem('name', name);
    sessionStorage.setItem('difficulty', difficulty);
}

const HR = () => <span><hr /></span>;

const TagLine =
    () => <span style={{margin: "0 1rem", color: "var(--action-color)", "font-size": "0.8rem"}}>the ultimate typing game</span>;

const StartGame = () => {
    const [name, setName] = useState(getNameFromSessionStorage() || '');
    const [difficulty, setDifficulty] = useState('');
    const REDIRECT_TO_GAME = {
        pathname: '/game',
        state: { name: name, difficulty: difficulty }
    };

    return (
        <div className="start-game">
            <img className="icon" src={'../../images/icons/awesome-keyboard.png'} alt="fast-fingers"></img>
            <header className="start-name-header">
                <AppTitle>fast fingers</AppTitle>
                <div className="tag-line-wrapper">
                    <HR />
                        <TagLine />
                    <HR />
                </div>
            </header>
            <section className="start-game-form-wrapper">
                <input
                    className="name"
                    placeholder="TYPE YOUR NAME"
                    value={name}
                    onChange={event => setName(event.target.value)}>
                </input>
                <select
                    className="difficulty-level"
                    defaultValue=""
                    onChange={event => setDifficulty(event.target.value)}>
                    <option value="" disabled>DIFFICULTY LEVEL</option>
                    <option value="EASY">EASY</option>
                    <option value="MEDIUM">MEDIUM</option>
                    <option value="HARD">HARD</option>
                </select>
                <Link to={REDIRECT_TO_GAME} >
                    <StartButton
                        disabled={name.length === 0 || difficulty.length ===0 ? true : "" }
                        onClick={event => storeInSession(name, difficulty)} >
                            <RightArrow />
                        START GAME
                </StartButton>
                </Link>
            </section>
        </div>)
}

export default StartGame;