import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { StartGameDiv, StartButton, RightArrow, Input, StartGameWrapper, DifficultyLevel } from './StartGameStyles'
import AppHeader from './appheader/appheader'

//TODO: Move this to a service
const getNameFromSessionStorage = () => sessionStorage.getItem('name');

const storeInSession = (name, difficulty) => {
    sessionStorage.setItem('name', name);
    sessionStorage.setItem('difficulty', difficulty);
}

const StartGame = () => {
    let history = useHistory();

    const [name, setName] = useState(getNameFromSessionStorage() || '');
    const [difficulty, setDifficulty] = useState('');
    const [inputError, setInputError] = useState(false);

    const REDIRECT_TO_GAME = {
        pathname: '/game',
        state: { name: name, difficulty: difficulty }
    };

    const checkForErrors = (event) => {
        if(difficulty === '') {
            setDifficulty('EASY');
        }
        return name.length > 0
    }

    const nameInput = useRef(null);

    const handleStartGameClick = (event) => {
        event.preventDefault();
        if(checkForErrors()) {
            storeInSession(name, difficulty)
            history.push(REDIRECT_TO_GAME)
        } else {
            setInputError(true);
            nameInput.current.focus();
        }
    }

    return (
        <StartGameDiv>
            <AppHeader />
            <StartGameWrapper>
                <Input required
                    ref={nameInput}
                    placeholder="TYPE YOUR NAME"
                    inputError={inputError}
                    value={name}
                    onChange={event =>  {
                            setInputError(event.target.value.length === 0);
                            setName(event.target.value)
                        }
                    }>
                </Input>
                <DifficultyLevel
                    defaultValue=""
                    onChange={event => setDifficulty(event.target.value)}>
                    <option value="" disabled>DIFFICULTY LEVEL</option>
                    <option value="EASY">EASY</option>
                    <option value="MEDIUM">MEDIUM</option>
                    <option value="HARD">HARD</option>
                </DifficultyLevel>
                <StartButton onClick={handleStartGameClick} >
                    <RightArrow />
                    START GAME
                </StartButton>
            </StartGameWrapper>
        </StartGameDiv>)
}

export default StartGame;