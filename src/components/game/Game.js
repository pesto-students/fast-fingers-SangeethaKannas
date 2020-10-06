import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import ScoreBoard from '../scoreboard/ScoreBoard';
import Timer from "../timer/Timer";
import TypeWord from "../typeword/TypeWord";
import GameHeader from "../gameheader/GameHeader";
import data from '../../data/dictionary.json';

//TODO: Move below methods to a service.
const DIFFICULTY_LEVELS = {
    'EASY': 1,
    'MEDIUM': 1.5,
    'HARD': 2
}

const getNewword = data => data[Math.floor(Math.random() * data.length)];

const getTimerValue = (word, difficulty) => Math.ceil(word.length / difficulty) * 1000;

const getDifficulty = (games, difficulty) => {
    let currentDifficultyLevel = DIFFICULTY_LEVELS[difficulty];
    if(games && games.length > 0 ) {
        currentDifficultyLevel += (0.01 * games.length);
    }
    if(currentDifficultyLevel >= DIFFICULTY_LEVELS['MEDIUM'] && currentDifficultyLevel < DIFFICULTY_LEVELS['MEDIUM']){

    } else if(currentDifficultyLevel < DIFFICULTY_LEVELS['MEDIUM']) {

    }
    return currentDifficultyLevel;
}

const Game = props => {
    const history = useHistory();

    let { name, difficulty } = typeof props.location.state !== 'undefined' ? props.location.state : {
        name: sessionStorage.getItem('name'),
        difficulty: sessionStorage.getItem('difficulty')
    };

    const [word, setWord] = useState(getNewword(data));
    const [typedWord, setTypedWord] = useState('')
    const [games, setGames] = useState(JSON.parse(sessionStorage.getItem('games') || '[]'));

    const handleChange = newValue => setTypedWord(newValue);

    const handleGameOver = (timeOffset) => {
        let path = {
            pathname: `result`,
            state: { gameIndex: games.length, gameScore: timeOffset, highScore: timeOffset > Math.max(games) }
        };

        if(timeOffset > 0) {
            const appendedGames = [...games, timeOffset];
            sessionStorage.setItem('games', JSON.stringify(appendedGames));
            setGames(appendedGames);
        }

        history.push(path);
    }

    useEffect(() => {
        if (word.toLowerCase() === typedWord.toLowerCase()) {
            setTypedWord('');
            const newWord = getNewword(data);
            setWord(newWord);
            handleGameOver((time - timeOffset) / 1000);
            setTime(getTimerValue(newWord, (DIFFICULTY_LEVELS[difficulty])))
        } else {
            //Continue game
        }
    })

    const [time, setTime] = useState(getTimerValue(word, (DIFFICULTY_LEVELS[difficulty])))
    const [timeOffset, setTimeOffset] = useState(0);
    const intervalRef = useRef();
    useEffect(() => {
        const interval = setInterval(() => {
            if (timeOffset >= time) {
                clearInterval(interval);
                handleGameOver(0);
            } else {
                setTimeOffset(timeOffset + 10);
            }
        }, 100);
        intervalRef.current = interval;

        return () => {
            clearInterval(intervalRef.current);
        }
    });

    return (
        <section className="game-container">
            <GameHeader name={name} difficulty={difficulty} />
            <div className="game-progress-wrapper row">
                <div class="column">
                    <ScoreBoard  games={games} />
                </div>
                <div class="game-progress column">
                    <Timer timerValue={(time - timeOffset) / 1000} totalTime={time} />
                    <TypeWord word={word} typedWord={typedWord} onChange={handleChange} />
                </div>
            </div>
        </section>)
}

export default Game;