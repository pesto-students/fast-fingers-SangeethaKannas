import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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

    @media screen and (max-width:600px) {
        margin-top: 2rem;
        margin-bottom: 3rem;
    }

`

const Word = ({ word, typedWord }) =>
        <WordWrapper>
            {
                [...word]
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