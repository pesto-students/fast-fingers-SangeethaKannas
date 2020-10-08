import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesome } from "../common/commoncomponents"
import { Button } from "../common/commoncomponents";

const _footerStyle = {
  display: "flex",
  justifyContent: "space-between",
  padding: "1rem 4rem",
  width: "85%"
}

const Footer = ({actionText, handleStopGame}) => {
  return (
    <footer style={_footerStyle}>
      <Button onClick={handleStopGame} style={{"flex-grow": 1}}>
        <FontAwesome className={'close'} />{actionText}
      </Button>
      <Link to="/">
        <FontAwesome className={'home'} fontSize={'3rem'} />
      </Link>
    </footer>
  )
};

export default Footer;