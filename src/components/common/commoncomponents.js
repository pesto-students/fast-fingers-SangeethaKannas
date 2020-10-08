import React from 'react';
import styled from 'styled-components'

const FontAwesome = ({className, fontSize = '1.5rem'}) => {
  const FA_STYLE = {
      "fontSize": fontSize,
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

export { FontAwesome, Button };
