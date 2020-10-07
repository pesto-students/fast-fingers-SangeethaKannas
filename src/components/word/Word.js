import React from 'react';
import PropTypes from 'prop-types';

const Word = ({ word, typedWord }) => {
    return (
        <div className="word">
            {
                [...word].map((letter, index) => {
                    const className = letter === typedWord[index] ? 'letter green' : 'letter blue'
                    return (<span key={index} className={className}>{letter}</span>)
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