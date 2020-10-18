import React, { useEffect, useRef } from 'react';
import Word from '../word/Word';
import styled from "styled-components";

const WordInput = styled.input`
  padding: 0.7rem 1rem;
  border: 1px solid rgb(154, 158, 154);
  min-width: 14rem;
  background-color: #98A8AB;
  color: white;
  font-size: 1.2rem;
  border-radius: 5px;
  text-transform: uppercase;
  text-justify: inter-word;
  text-align: match-parent;

  @media screen and (max-width:600px) {
      margin-top: 1rem;
      margin-bottom: 3rem;
      border: 2px solid white;
  }
`

const TypeWord = ({ word, typedWord, onChange, paused }) => {

  const textInput = useRef(null);

  useEffect(() => {
    textInput.current.focus();
  }, []);

  useEffect(() => {
    if (paused === false) {
      textInput.current.focus();
    }
  }, [paused])

  return (
    <section>
        <Word word={word} typedWord={typedWord} />
        <WordInput
            autoFocus
            ref={textInput}
            className="word-input"
            value={typedWord}
            onChange={e => onChange(e)} />
    </section>
  )
}

export default TypeWord;