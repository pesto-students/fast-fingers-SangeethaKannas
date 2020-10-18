import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { FontAwesome } from "../common/commoncomponents";
import { ActionButton } from "../common/Button";

const Footer = styled.footer`
  display: flex;
  justifyContent: space-between;
  padding: 1rem 4rem;


  @media screen and (max-width:600px) {
    width: 100%;
    padding: 1rem 0;
  }
`

const GameFooter = ({actionText, handleStopGame}) => {
  return (
    <Footer mobile={window.innerWidth < 500}>
      <ActionButton onClick={handleStopGame} style={{"flex-grow": 1}}>
        <FontAwesome className={'close'} />{actionText}
      </ActionButton>
      <Link to="/">
        <FontAwesome className={'home'} fontSize={'3rem'} />
      </Link>
    </Footer>
  )
};

export default GameFooter;