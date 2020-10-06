import React from 'react';
import { Link } from 'react-router-dom';

const Footer = ({handleStopGame}) => {
  return (
    <footer className="game-footer">
       <button onClick={handleStopGame}>Stop Game</button>
      <Link to="/"></Link>
    </footer>
  )
};

export default Footer;
