import React, { useEffect, useRef } from 'react';
import Word from '../word/Word';
import './typedword.css'

const TypeWord = ({ word, typedWord, onChange }) => {

  const textInput = useRef(null);

  useEffect(() => {
    textInput.current.focus();
  }, []);
    return (
        <section>
            <Word word={word} typedWord={typedWord} />
            <input ref={textInput} className="word-input" value={typedWord} onChange={e => onChange(e.target.value)} />
        </section>
    )
}

export default TypeWord;