import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import GameHeader from "../gameheader/GameHeader";
import GameFooter from "../gamefooter/GameFooter";
import {Button, FontAwesome} from "../common/commoncomponents";
import './gameover.css'

const GameOver = props => {
    let history = useHistory();

    let { gameIndex, gameScore, highScore = false } =
            typeof props.location.state != 'undefined'  ? props.location.state : {};

    let { name, difficulty } =
            typeof props.location.state != 'undefined' && props.location.state.difficulty
            ? props.location.state :
            {
                name: sessionStorage.getItem('name'),
                difficulty: sessionStorage.getItem('difficulty')
            };

    return (
        <section className="game-over">
            <GameHeader name={name} difficulty={difficulty} />
            <div className="game-status">
                {
                    typeof gameIndex != 'undefined' ?
                        (<div>
                            <header className="header">SCORE : GAME {gameIndex}</header>
                            <div className="score">{gameScore}</div>
                            {
                                highScore === true ? <div className="new-high-score">NEW HIGH SCORE</div> : ""
                            }
                        </div>) :
                        (<div>
                        </div>)
                }

                <Link to='/game' >
                    <FontAwesome className={'undo'}/>
                    <Button>PLAY AGAIN</Button>
                </Link>
            </div>
            <GameFooter actionText={'QUIT'} handleStopGame={() => history.push({pathname: '/'})}/>
        </section>
    )

};

export default GameOver;