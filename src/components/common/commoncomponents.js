import React from 'react';
import styled from 'styled-components'

const FontAwesome = ({className, fontSize = '1.5rem'}) => {
  const FA_STYLE = {
      "font-size": fontSize,
       color: "var(--action-color)",
       "margin-right": "0.3rem",
       "min-width": "2rem",
       "text-align": "center",
  }
  return <i style={FA_STYLE} className={"fa fa-" + className} aria-hidden="true"></i>;
}

const Button = styled.button`
    font-size: 1.5rem;
    color: var(--action-color);
`

const FlexDiv = styled.div`
  display: flex
`

export { FontAwesome, Button, FlexDiv };
