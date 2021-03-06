import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

//TODO: Get color from themes
const Letter = styled.span`
    text-transform: uppercase;
    font-size: 2rem;
    margin: 0.1rem 0.3rem;
    color: ${props => props.typedLetter ? (props.letter.toLowerCase() === props.typedLetter.toLowerCase() ? '#54BA18' : '#445298'): '#fff'};

    @media screen and (max-width:600px) {
        margin: 0.1rem 0.1rem;
        font-size: 1.7rem;
    }
`

const WordWrapper = styled.div`
    margin: 1rem 0;

    @media screen and (max-device-width:600px) {
        margin-top: 2rem;
        margin-bottom: 2rem;
    }

    @media screen and (max-device-width:600px) and (orientation:landscape) {
        margin-top: 0rem;
        margin-bottom: 0rem;
    }
`

const Word = ({ word, typedWord }) =>
        <WordWrapper>
            {
                [...word]
                    .map(letter => letter.trim())
                    .filter(letter => letter.length > 0)
                    .map((letter, index) =>
                        <Letter
                            letter={letter}
                            typedLetter={typedWord[index]}
                            key={index}>{letter}
                        </Letter>
                    )
            }
        </WordWrapper>

Word.propTypes = {
    word: PropTypes.string,
    typedWord: PropTypes.string
};

Word.defaultProps = {
    word: '',
    typedWord: PropTypes.string
};

export default Word;