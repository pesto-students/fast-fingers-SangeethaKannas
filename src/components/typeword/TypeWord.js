import React from 'react';
import Word from '../word/Word';

const { useRef, useEffect } = React;
const TypeWord = ({ word, typedWord, onChange }) => {
 const textInput = useRef(null);

  useEffect(() => {
    textInput.current.focus();
  }, []);
    return (
        <section>
            <Word word={word} typedWord={typedWord} />
            <input  ref={textInput} className="word-input" value={typedWord} onChange={e => onChange(e.target.value)} />
        </section>
    )
}

export default TypeWord;