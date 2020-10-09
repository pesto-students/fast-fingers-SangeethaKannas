import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';

import ScoreBoard from '../scoreboard/ScoreBoard';
import Timer from "../timer/Timer";
import TypeWord from "../typeword/TypeWord";
import GameHeader from "../gameheader/GameHeader";
import GameFooter from "../gamefooter/GameFooter";
import data from '../../data/dictionary.json';
import { Row, Column, GameContainer } from "./GameStyle";
//TODO: Move below methods to a service.
const DIFFICULTY_LEVELS = {
    'EASY': 1,
    'MEDIUM': 1.5,
    'HARD': 2
}

const storeInSession = (difficultyLevel) => sessionStorage.setItem('difficulty', difficultyLevel);

const getFromSession = () => sessionStorage.getItem('difficulty');

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

    const handleStopGame = () => {
        clearInterval(intervalRef.current);
        setGames([...games, totalTime]);
        // history.push(history.push({state: {
        //         gameIndex: games.length + 1,
        //         gameScore: totalTime,
        //         highScore: totalTime > Math.max(games)
        //     }, ...path})
        // )}
    }

    //TODO Refactor, lot of state managment - needs to be split across smaller components
    const [word, setWord] = useState(getNewword(data));
    const [typedWord, setTypedWord] = useState('')
    const [games, setGames] = useState(JSON.parse(sessionStorage.getItem('games') || '[]'));
    const [time, setTime] = useState(getTimerValue(word, getDifficultyFactor(games,DIFFICULTY_LEVELS[getFromSession()])))
    const [timeOffset, setTimeOffset] = useState(0);
    const [totalTime, setTotalTime] = useState(0);

    useEffect(() => {
        if (word.toLowerCase() === typedWord.toLowerCase()) {
            //If successful increase difficulty factor
            const difficultyFactor = getDifficultyFactor(games, DIFFICULTY_LEVELS[getFromSession()]);

            if(difficultyFactor >= DIFFICULTY_LEVELS['MEDIUM'] && difficultyFactor < DIFFICULTY_LEVELS['HARD']){
                storeInSession('MEDIUM');
            } else if(difficultyFactor >= DIFFICULTY_LEVELS['HARD']) {
                storeInSession('HARD');
            }

            setTotalTime(totalTime + ((time - timeOffset) / 1000));

            //Reset
            const newWord = getNewword(data)
            setWord(newWord);
            setTypedWord('');
            setTime(getTimerValue(newWord, difficultyFactor));
            setTimeOffset(0);

        } else {
            //Continue game
        }

    },  [word, typedWord, time, timeOffset, totalTime, games])

    const intervalRef = useRef();

    useEffect(() => {
        const interval = setInterval(() => {
            if (timeOffset >= time) {
                clearInterval(interval);
                history.push(path);
            } else {
                setTimeOffset(timeOffset + 10);
            }
        }, 10);
        intervalRef.current = interval;

        return () => {
            clearInterval(intervalRef.current);
        }
    });

    return (
        <GameContainer>
            <GameHeader name={name} difficulty={getFromSession()} />
            <Row>
                <Column sidebar mobile={window.innerWidth < 500 || games.length === 0 }>
                    <ScoreBoard games={games} highScoreIndex={games.indexOf(Math.max(...games))} />
                </Column>
                <Column gameprogress>
                    <Timer timerValue={(time - timeOffset) / 1000} totalTime={time} />
                    <TypeWord word={word} typedWord={typedWord} onChange={newValue => setTypedWord(newValue)} />
                </Column>
            </Row>
            <GameFooter actionText={'STOP GAME'}
                handleStopGame={handleStopGame}
            />
        </GameContainer>)
}

export default Game;