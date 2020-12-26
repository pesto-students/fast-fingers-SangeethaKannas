import styled from "styled-components";
import { FlexDiv } from "../common/commoncomponents";

export const GameOverSection = styled(FlexDiv)`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 99vh;
  padding: 1rem 4rem;

  @media screen and (max-width:600px) {
    padding: 0.5rem 1rem;

  }
`

export const Header = styled.header`
  font-size: 2rem;
  color: var(--font-color);
`

export const GameStatus = styled(FlexDiv)`
  flex-grow: 1;
  flex-shrink: 0;
  flex-direction: column;
  color: var(--font-color);
  align-items: center;
  justify-content: center;

  &:first-child {
    flex-grow: 1;
  }
`

export const Score = styled(FlexDiv)`
  padding: 3rem 2rem;
  align-items: center;
  font-size: 7.5rem;
  justify-content: center;
  color: var(--font-color);

  @media screen and (max-width:600px) and (orientation:portrait) {
    font-size: 7rem;
  }

  @media screen and (max-width:600px) and (orientation:landscape) {
    font-size: 6rem;
    padding: 0;
  }
`

export const NewHighScore = styled.div`
  color: var(--font-color);
  margin: 2rem 0;
  font-size: 1.8rem;
`