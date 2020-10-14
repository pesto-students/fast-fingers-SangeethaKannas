import styled from 'styled-components'
import { Button } from '../common/commoncomponents';

export const StartGameDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1rem 0;
`

export const StartButton = styled(Button)`
    text-align: center;
    color: var(--action-color);
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    text-decoration: none;

    &:disabled {
        cursor: not-allowed;
    }
`

export const RightArrow = styled.span`
    width: 0;
    height: 0;
    border-top: 1rem solid transparent;
    border-bottom: 1rem solid transparent;
    border-left: 1.4rem solid var(--action-color);
    margin-right: 1rem;
    display: inline-block;
    border-radius: 6px;
`;

export const Input = styled.input`
    border: ${inputError => inputError.inputError === true ? '3px solid #df0808': 'none'};
    color: #eaeaea;
    padding: 0.9rem 1rem;
    font-size: 1.1rem;
    background: #97A1A3;
    border-radius: 5px;
`;

export const DifficultyLevel = styled.select`
    background-color: #ccd5d7;
    border: solid 2px #97a1a3;
    border-radius: 5px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    font-size: 1.3rem;
    line-height: 1.5;
    letter-spacing: normal;
    text-align: left;
    margin: 2rem 0;
    padding: 0.7rem 1rem;
    color: white;
`

export const StartGameWrapper = styled.div`
  display: grid;
  align-items: center;
  flex-direction: column;
  padding: 2rem 1rem;
  width: 25vw;

  @media screen and (max-width:600px) {
      width: 81vw;
  }
`