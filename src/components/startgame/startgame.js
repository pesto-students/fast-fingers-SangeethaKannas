import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';

const getNameFromSessionStorage = () =>
    null != sessionStorage.getItem('name') ?
        { name: sessionStorage.getItem('name'), difficulty: sessionStorage.getItem('difficulty') }
        : null
    ;

const StartGame = () => {
    const [name, setName] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const REDIRECT_TO_GAME = {
        pathname: '/game',
        state: { name: name, difficulty: difficulty }
    };

    const storeInSession = () => {
        sessionStorage.setItem('name', name);
        sessionStorage.setItem('difficulty', difficulty);
    }

    if (getNameFromSessionStorage()) {
        return (<Redirect to={REDIRECT_TO_GAME} />);

    } else
        return (
            <div className="start-game">
                <img class="icon"></img>
                <header>
                    <h1 className="app-title">Fast Fingers</h1>
                    <span>the ultimate typing game</span>
                </header>
                <section className="start-game-form-wrapper">
                    <input className="name" placeholder="TYPE YOUR NAME" value={name} onChange={event => setName(event.target.value)}></input>
                    <select className="difficulty-level" placeholder="DIFFICULTY LEVEL" onChange={event => setDifficulty(event.target.value)}>
                        <option value="EASY">EASY</option>
                        <option value="MEDIUM">MEDIUM</option>
                        <option value="HARD">HARD</option>
                    </select>
                    <Link to={REDIRECT_TO_GAME} >
                        <button
                            className="start-game-btn"
                            disabled={name.length === 0 ? true : ""}
                            onClick={event => storeInSession(event)} >
                            START GAME
                    </button>
                    </Link>
                </section>
            </div>)
}

export default StartGame;
