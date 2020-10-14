import styled from "styled-components";

export const GameOverSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 95vw;
`

export const Header = styled.header`
  font-size: 2rem;
  color: white;
`

export const GameStatus = styled.div`
    flex-grow: 1;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    color: white;
    align-items: stretch;

    &:first-child {
      flex-grow: 1;
    }
`

export const Score = styled.div`
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    font-size: 3.5rem;
    justify-content: center;
    color: white;
`

export const NewHighScore = styled.div`
    color: white;
    margin: 2rem 0;
    font-size: 1.8rem;
`