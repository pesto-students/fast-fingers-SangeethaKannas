import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesome } from "../common/commoncomponents";
import styled from 'styled-components';
import { Button } from "../common/commoncomponents";

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 1rem 4rem;
  width: ${props => props.mobile ? "75%" : "85%"}
`

const GameFooter = ({actionText, handleStopGame}) => {
  return (
    <Footer mobile={window.innerWidth < 500}>
      <Button onClick={handleStopGame} style={{"flex-grow": 1}}>
        <FontAwesome className={'close'} />{actionText}
      </Button>
      <Link to="/">
        <FontAwesome className={'home'} fontSize={'3rem'} />
      </Link>
    </Footer>
  )
};

export default GameFooter;
