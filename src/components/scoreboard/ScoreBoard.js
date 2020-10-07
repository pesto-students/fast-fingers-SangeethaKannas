import React from 'react'
import PropTypes from 'prop-types';

const ScoreBoard = ({ games }) => {

    if (!games || games.length === 0) {
        return (<div className="empty-games"></div>)
    } else {
        return (
            <section className="score-board"  >
                <header>SCORE BOARD</header>
                <article>
                    <ul className="games-list">
                        {
                            games.map((game, index) =>
                                <li className="game" key={index}>Game {index + 1}: {game}</li>
                            )
                        }
                    </ul>
                </article>
            </section>
        )
    }
}

ScoreBoard.propTypes = {
    games: PropTypes.array,
};

ScoreBoard.defaultProps = {
    games: [],
};

export default ScoreBoard;