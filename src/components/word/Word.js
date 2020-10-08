import React from 'react';
import PropTypes from 'prop-types';

const _wordStyle = { margin: "1rem 0" };

const Letter = ({letter, typedLetter, ...props}) => {
    const _letterStyle = {
        "text-transform": "uppercase",
        "font-size": "2rem",
        margin: "0.1rem 0.3rem",
        color: typedLetter ? (letter.toLowerCase() === typedLetter.toLowerCase() ? '#54BA18' : '#445298'): '#fff'
    }

    return <span style={_letterStyle} {...props}>{letter}</span>;
}

const Word = ({ word, typedWord }) => {
    return (
        <div style={_wordStyle}>
            {
                [...word].map((letter, index) => {
                    return (<Letter letter={letter} typedLetter={typedWord[index]} key={index}/>)
                })
            }
        </div>
    )
}

Word.propTypes = {
    word: PropTypes.string,
    typedWord: PropTypes.string
};

Word.defaultProps = {
    word: '',
    typedWord: PropTypes.string
};

export default Word;