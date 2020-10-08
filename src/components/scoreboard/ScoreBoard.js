    import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'

const Score = styled.li`
    text-align: left;
    color: white;
    margin: 0.5rem 0;
    font-size: 1.5rem;
`

const Scores = styled.section`
  min-height: 70vh;
  max-height: 80vh;
  overflow-y: auto;
  padding: 0.5rem 1rem;
  border: 2px solid var(--action-color);
  border-radius: 10px;

  & > header {
    color: var(--action-color);
    margin: 0.5rem 0;
    font-size: 1.2rem;
  }
`;

const ScoreBoard = ({ games }) => {

    if (!games || games.length === 0) {
        return (<div class="hide"></div>)
    } else {
        return (
            <Scores>
                <header>SCORE BOARD</header>
                    <ul>
                        {
                            games.map((score, index) =>
                                <Score key={index}>Game {index + 1}: {score}</Score>
                            )
                        }
                    </ul>
            </Scores>
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