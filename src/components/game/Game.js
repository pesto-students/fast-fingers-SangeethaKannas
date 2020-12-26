import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';

import GameHeader from "../gameheader/GameHeader";
import ScoreBoard from '../scoreboard/ScoreBoard';
import Timer from "../timer/Timer";
import TypeWord from "../typeword/TypeWord";
import GameFooter from "../gamefooter/GameFooter";
import Modal from '../modal/modal';

import { Row, Column, GameContainer, TableRow, TableColumn, TableHeader, GameQualitySpan, TableHead } from "./GameStyle";
import GameService from '../../services/GameService'
import SocialMedia from '../socialmedia/SocialMedia';

const Game = props => {
    let history = useHistory();
    let { name, difficulty } = typeof props.location.state !== 'undefined'
            && props.location.state.difficulty !== '' ? props.location.state : GameService.getDataFromSession();

    if(name) {
        GameService.storeInSession('difficulty', difficulty);
    } else {
        history.push({pathname: '/'});
    }

    //TODO Refactor, lot of state managment - needs to be split across smaller components
    const [word, setWord] = useState(GameService.getNewword(difficulty));
    const [typedWord, setTypedWord] = useState('')
    const [games, setGames] = useState(GameService.getGames());
    const [game, setGame] = useState({keystrokes: 0, words: [], totaltime: 0});
    const [selectedGame, setSelectedGame] = useState({words: []});
    const [keystrokes, setKeyStrokes] = useState(0);
    const [time, setTime] = useState(GameService.getTimerValue(word, GameService.getDifficultyFactor(games.length, GameService.getCurrentDifficultyFactor())))
    const [timeOffset, setTimeOffset] = useState(0);
    const [paused, setPaused] = useState(false);

    const handleStopGame = () => {
        clearInterval(intervalRef.current);
        if(game.totaltime > 0) {
            const appendedGames = [...games, {...game, id: games.length + 1}]
            setGames(appendedGames);
            GameService.storeInSession('games', appendedGames);

        }
        history.push(  {
            pathname: 'result',
            state: {
                gameIndex: games.length + 1,
                gameScore: game.totaltime.toFixed(2),
                highScore: game.totaltime > Math.max(games.map(game => game.totaltime))
            }
        } );
    }

    const [displayModal, setDisplayModal] = useState('none');

    const handleWordChange = (event) => {
        paused === false && setTypedWord(event.target.value);
        if(word.trim().toLowerCase() === event.target.value.trim().toLowerCase()) {
            const difficultyFactor = GameService.getDifficultyFactor(
                    game.words.length,
                    GameService.getCurrentDifficultyFactor());
            GameService.updatedDifficultyFactor(difficultyFactor);
            setGame({
                words: [...game.words, { word: word, time: time, timeOffset: timeOffset, keystrokes: keystrokes  }],
                totaltime: game.totaltime + ((time - timeOffset) / 1000)
            });

            //Reset
            const newWord = GameService.getNewword(difficulty)
            setWord(newWord);
            setTypedWord('');
            setTime(GameService.getTimerValue(newWord, difficultyFactor));
            setTimeOffset(0);
            setKeyStrokes(0);
        } else {
            setKeyStrokes(keystrokes + 1);
        }
    }

    const intervalRef = useRef();

    const TIMER_INTERVALS = 10;
    useEffect(() => {
        const interval = setInterval(() => {
            if (timeOffset >= time) {
                handleStopGame();
            } else if(paused === false) {
                setTimeOffset(timeOffset + TIMER_INTERVALS);
            }

        }, TIMER_INTERVALS);

        intervalRef.current = interval;

        return () => {
            clearInterval(intervalRef.current);
        }
    });

    const handleGameClick = (event) => {
        if(paused) {
            const selectedNode = event.target;
            const selectedNodeIndex = Array.prototype.indexOf.call(selectedNode.parentNode.children, selectedNode);
            setSelectedGame(games[selectedNodeIndex]);
            setDisplayModal('block')
        }
    }

    return (
        <GameContainer>
            <GameHeader name={name} difficulty={GameService.getFromSession()} />
            <Row>
                <Column sidebar mobile={window.innerWidth < 500 || games.length === 0 }>
                    <ScoreBoard
                         games={games}
                         highScoreIndex={games.indexOf(Math.max(...games))}
                         handleGameClick={handleGameClick}
                    />
                </Column>
                <Column gameprogress>
                    <Timer
                        timerValue={(time - timeOffset) / 1000}
                        totalTime={time}
                        paused={paused}
                        handlePause={()=> { setPaused(!paused); }}
                    />
                    <TypeWord
                        word={word}
                        typedWord={typedWord}
                        paused={paused}
                        onChange={handleWordChange}
                    />
                </Column>
            </Row>
            <GameFooter actionText={'STOP GAME'}
                handleStopGame={handleStopGame}
            />
            <Modal
                header={
                    'Game ' + selectedGame.id +
                    ' Total time: ' + selectedGame.totaltime +
                    ' Count: ' + selectedGame.words.length
                }
                footer={''}
                display={displayModal}
                handleCloseAction={()=>setDisplayModal('none')}>
                    <table>
                        <TableHead>
                            <TableHeader>Word</TableHeader>
                            <TableHeader>Total Time</TableHeader>
                            <TableHeader>Time Taken</TableHeader>
                            <TableHeader>Changes</TableHeader>
                        </TableHead>
                        <tbody>
                            {
                                selectedGame.words
                                    .map(currentWord => (
                                        <TableRow key={currentWord.index}>
                                            <TableColumn>{currentWord.word}</TableColumn>
                                            <TableColumn>{(currentWord.time / 1000).toFixed(2)}</TableColumn>
                                            <TableColumn>{(currentWord.timeOffset / 1000).toFixed(2)}</TableColumn>
                                            <TableColumn>
                                                <GameQualitySpan style={
                                                {'background-color': GameService.getBgColor(currentWord.word.length, currentWord.keystrokes) }} >
                                                    {currentWord.word.length} : {currentWord.keystrokes}
                                                </GameQualitySpan>
                                            </TableColumn>
                                        </TableRow>
                                ))
                            }
                        </tbody>
                    </table>
            </Modal>
            <div>
                <SocialMedia />
            </div>
        </GameContainer>)
}

export default Game;