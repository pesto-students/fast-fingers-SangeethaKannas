import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import GameHeader from "../gameheader/GameHeader";
import GameFooter from "../gamefooter/GameFooter";
import { Button, FontAwesome } from "../common/commoncomponents";
import { GameOverSection, Header, GameStatus, Score } from "./GameOverStyles";

const GameOver = props => {
    let history = useHistory();

    let { gameIndex, gameScore, highScore = false } =
            props.location && typeof props.location.state != 'undefined'  ? props.location.state : {};

    let { name, difficulty } =
            props.location && typeof props.location.state != 'undefined' && props.location.state.difficulty
            ? props.location.state :
            {
                name: sessionStorage.getItem('name'),
                difficulty: sessionStorage.getItem('difficulty')
            };

    return (
        <GameOverSection>
            <GameHeader name={name} difficulty={difficulty} />
            <GameStatus>
                {
                    typeof gameIndex != 'undefined' ?
                        (<div>
                            <Header >SCORE : GAME {gameIndex}</Header>
                            <Score >{gameScore}</Score>
                            {
                                highScore === true ? <div className="new-high-score">NEW HIGH SCORE</div> : ""
                            }
                        </div>) :
                        ('')
                }

                <Link to='/game' >
                    <FontAwesome className={'undo'}/>
                    <Button>PLAY AGAIN</Button>
                </Link>
            </GameStatus>
            <GameFooter actionText={'QUIT'} handleStopGame={() => history.push({pathname: '/'})}/>
        </GameOverSection>
    )

};

export default GameOver;