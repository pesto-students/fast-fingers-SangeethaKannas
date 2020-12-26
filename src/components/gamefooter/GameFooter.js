import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { FontAwesome } from "../common/commoncomponents";
import { ActionButton } from "../common/Button";

const Footer = styled.footer`
  display: flex;
  padding: 1rem 0;
  width: 100%;

  @media screen and (max-width:600px) {
    width: 100%;
    padding: 0;
  }
`

const GameFooter = ({actionText, handleStopGame}) => {
  return (
    <Footer mobile={window.innerWidth < 500}>
      <ActionButton onClick={handleStopGame} >
        <FontAwesome className={'close'} />{actionText}
      </ActionButton>
      <Link to="/">
        <FontAwesome className={'home'} fontSize={'3rem'} />
      </Link>
    </Footer>
  )
};

GameFooter.propTypes = {
  actionText: PropTypes.string,
  handleStopGame: PropTypes.func
};

GameFooter.defaultProps = {
  actionText: 'STOP GAME',
  handleStopGame: () => {}
};

export default GameFooter;