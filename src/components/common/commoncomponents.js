import React from 'react';
import styled from 'styled-components'

const FontAwesome = ({className}) => {
  const FA_STYLE = {
      "fontSize": "1.5rem",
       color: "var(--action-color)",
       "margin-right": "0.3rem",
       "min-width": "2rem",
       "text-align": "center",
  }
  return <i style={FA_STYLE} className={"fa fa-" + className} aria-hidden="true"></i>;
}

const Button = styled.button`
    font-size: 1.2rem;
    color: var(--action-color);
`

const StartButton = styled(Button)`
    text-align: center;
    color: var(--action-color);
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    text-decoration: none;

    &:disabled {
        cursor: not-allowed;
    }
`

const RightArrow = styled.span`
    width: 0;
    height: 0;
    border-top: 0.7rem solid transparent;
    border-bottom: 0.7rem solid transparent;
    border-left: 0.7rem solid var(--action-color);
    margin-right: 1.5rem;
    display: inline-block;
`;

const AppTitle = styled.h1`
    margin-top: 0;
    margin-bottom: -2px;
    color: var(--action-color);
    font-size: 3rem;
    font-weight: normal;
    text-align: left;
`

export { FontAwesome, Button, StartButton, RightArrow, AppTitle};
