import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components'

import ScoreBoard from '../scoreboard/ScoreBoard';
import Timer from "../timer/Timer";
import TypeWord from "../typeword/TypeWord";
import GameHeader from "../gameheader/GameHeader";
import GameFooter from "../gamefooter/GameFooter";
import data from '../../data/dictionary.json';
import './game.css'

const Column = styled.div`
    float: left;
    padding: 15px;
    width:  ${props => props.sidebar ? '25%' :'auto'};
    display: ${props => props.mobile ? 'none' :'block'};
`

const Row = styled.div`
    flex-grow: 1;
    display: flex;
    min-width: 83%;
    max-width: 83%;
    align-self: center;
    flex-shrink: 0;

    &:after {
        content: "";
        display: table;
        clear: both;
    }
`

//TODO: Move below methods to a service.
const DIFFICULTY_LEVELS = {
    'EASY': 1,
    'MEDIUM': 1.5,
    'HARD': 2
}

const storeInSession = (difficultyLevel) => {
    sessionStorage.setItem('difficulty', difficultyLevel);
}

const getFromSession = () => {
    return sessionStorage.getItem('difficulty');
}

const getNewword = data => data[Math.floor(Math.random() * data.length)];

const getTimerValue = (word, difficultyFactor) => Math.ceil(word.length / difficultyFactor) * 1000;

const getDifficultyFactor = (games, difficultyLevel) => {
    let difficultyFactor = difficultyLevel;
    if(games && games.length > 0 ) {
        difficultyFactor += (0.01 * games.length);
    }

    return difficultyFactor;
}

const Game = props => {
    let history = useHistory();
    let path = { pathname: 'result' };

    let { name, difficulty } = typeof props.location.state !== 'undefined'
            && props.location.state.difficulty !== ''
            ? props.location.state : {
                name: sessionStorage.getItem('name'),
                difficulty: sessionStorage.getItem('difficulty')
            };
    storeInSession(difficulty);

    //TODO Refactor, lot of state managment - needs to be split across smaller components
    const [word, setWord] = useState(getNewword(data));
    const [typedWord, setTypedWord] = useState('')
    const [games, setGames] = useState(JSON.parse(sessionStorage.getItem('games') || '[]'));
    const [time, setTime] = useState(getTimerValue(word, getDifficultyFactor(games,DIFFICULTY_LEVELS[getFromSession()])))
    const [timeOffset, setTimeOffset] = useState(0);

    useEffect(() => {
        if (word.toLowerCase() === typedWord.toLowerCase()) {
            setTypedWord('');
            const newWord = getNewword(data);
            setWord(newWord);

            //Add to games only when it is successful
            const timeTaken = (time - timeOffset) / 1000
            const appendedGames = [...games, timeTaken];
            if(timeTaken > 0) {
                sessionStorage.setItem('games', JSON.stringify(appendedGames));
                setGames(appendedGames);
            }

            const difficultyFactor = getDifficultyFactor(games, DIFFICULTY_LEVELS[getFromSession()]);
            setTime(getTimerValue(newWord, difficultyFactor));

            if(difficultyFactor >= DIFFICULTY_LEVELS['MEDIUM'] && difficultyFactor < DIFFICULTY_LEVELS['HARD']){
                storeInSession('MEDIUM');
            } else if(difficultyFactor >= DIFFICULTY_LEVELS['HARD']) {
                storeInSession('HARD');
            }
            history.push({state: {
                gameIndex: appendedGames.length,
                gameScore: timeTaken,
                highScore: timeTaken > Math.max(games)
            }, ...path});
        } else {
            //Continue game
        }


    },  [word, typedWord, time, timeOffset, games, history, path])

    const intervalRef = useRef();

    useEffect(() => {
        const interval = setInterval(() => {
            if (timeOffset >= time) {
                clearInterval(interval);
                history.push(path);
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
            <GameHeader name={name} difficulty={getFromSession()} />
            <Row>
                <Column sidebar mobile={window.innerWidth < 500 || games.length === 0 }>
                    <ScoreBoard games={games} highScoreIndex={games.indexOf(Math.max(...games))} />
                </Column>
                <Column className="game-progress">
                    <Timer timerValue={(time - timeOffset) / 1000} totalTime={time} />
                    <TypeWord word={word} typedWord={typedWord} onChange={newValue => setTypedWord(newValue)} />
                </Column>
            </Row>
            <GameFooter actionText={'STOP GAME'}
                handleStopGame={() => {clearInterval(intervalRef.current);history.push(path)}}
            />
        </section>)
}

export default Game;