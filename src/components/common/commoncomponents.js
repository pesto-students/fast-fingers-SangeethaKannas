import React from 'react';
import styled from 'styled-components'
import BaseElement from './BaseElement';

export const FontAwesome = ({className, fontSize = '1.5rem', ...props}) => {
  const FA_STYLE = {
      "font-size": fontSize,
       color: props.color || "var(--action-color)",
       "min-width": "2rem"
  }
  return <i style={FA_STYLE} className={"fa fa-" + className} aria-hidden="true"></i>;
}

export const FlexDiv = styled(BaseElement).attrs(props => {
  return {
    spacing: {
      px: props.theme.spacing(2),
      py: props.theme.spacing(1),
    },
    flex: {

    },
    textAlign: 'center',
  }
})`
  display: flex
`