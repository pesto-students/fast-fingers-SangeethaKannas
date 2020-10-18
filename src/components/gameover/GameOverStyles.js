import styled from "styled-components";
import { FlexDiv } from "../common/commoncomponents";

export const GameOverSection = styled(FlexDiv)`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 95vw;
  height: 90vh;
`

export const Header = styled.header`
  font-size: 2rem;
  color: white;
`

export const GameStatus = styled(FlexDiv)`
  flex-grow: 1;
  flex-shrink: 0;
  flex-direction: column;
  color: white;
  align-items: center;
  justify-content: center;

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

  @media screen and (max-width:600px) {
    font-size: 9rem;
  }
`

export const NewHighScore = styled.div`
  color: white;
  margin: 2rem 0;
  font-size: 1.8rem;
`