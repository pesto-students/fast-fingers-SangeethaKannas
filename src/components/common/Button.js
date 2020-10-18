import styled from 'styled-components'
import BaseElement from './BaseElement';

export const Button = styled(BaseElement).attrs(props => {
  return {
    as: 'button',
    spacing: {
      px: props.theme.spacing(2),
      py: props.theme.spacing(1),
    },
    textAlign: 'left',
    flexGrow: 1
  }
})`
  white-space: nowrap;
  border: none;
  cursor: pointer;
  border-radius: 4px; // should be part of theme

  [disabled] {
    opacity: 0.6;
    pointer-events: none;
  }
`;

export const ActionButton = styled(Button)`
    font-size: 1.5rem;
    color: ${props => props.theme.colors.action};

    @media screen and (max-width:600px) {
      padding: 0.5rem 1rem;
      flex-grow: 1;
    }

`