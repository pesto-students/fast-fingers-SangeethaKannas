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

    &:first-child {
      width: 25%;
    }
`

const Row = styled.div`
    flexs-grow: 1;
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

const getNewword = data => data[Math.floor(Math.random() * data.length)];

const getTimerValue = (word, difficulty) => Math.ceil(word.length / difficulty) * 1000;

const Game = props => {
    let history = useHistory();
    let path = { pathname: 'result' };

    let { name, difficulty } = typeof props.location.state !== 'undefined'
            && props.location.state.difficulty !== ''
            ? props.location.state : {
                name: sessionStorage.getItem('name'),
                difficulty: sessionStorage.getItem('difficulty')
            };

    //TODO Refactor, lot of state managment - needs to be split across smaller components
    const [word, setWord] = useState(getNewword(data));
    const [typedWord, setTypedWord] = useState('')
    const [games, setGames] = useState(JSON.parse(sessionStorage.getItem('games') || '[]'));
    const [time, setTime] = useState(getTimerValue(word, (DIFFICULTY_LEVELS[difficulty])))
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
            setTime(getTimerValue(newWord, (DIFFICULTY_LEVELS[difficulty])));
            history.push({state: {
                gameIndex: appendedGames.length,
                gameScore: timeTaken,
                highScore: timeTaken > Math.max(games)
            }, ...path});
        } else {
            //Continue game
        }
    },  [word, typedWord, time, timeOffset, games, history, path, difficulty])

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
            <GameHeader name={name} difficulty={difficulty} />
            <Row>
                <Column>
                    <ScoreBoard games={games} />
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