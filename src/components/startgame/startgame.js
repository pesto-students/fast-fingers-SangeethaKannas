import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { StartButton, RightArrow, AppTitle } from '../common/commoncomponents'
import './startgame.css';

//TODO: Move this to a service
const getNameFromSessionStorage = () => sessionStorage.getItem('name');

const storeInSession = (name, difficulty) => {
    sessionStorage.setItem('name', name);
    sessionStorage.setItem('difficulty', difficulty);
}

const HR = () => <span><hr /></span>;

const TagLine = () => <span style={{margin: "0 1rem", color: "var(--action-color)"}}>the ultimate typing game</span>;

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
