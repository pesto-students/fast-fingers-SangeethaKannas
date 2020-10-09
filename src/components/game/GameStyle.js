import styled from "styled-components";

export const GameContainer = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`

export const Column = styled.div`
  float: left;
  padding: 15px;
  width:  ${props => props.sidebar ? '25%' :'auto'};
  display: ${props => props.mobile ? 'none' : props.gameprogress ? 'flex' : 'block'};
  flex-direction: ${props => props.gameprogress ? 'column': 'inherit'};
  align-items: ${props => props.gameprogress ? 'center': 'inherit'};
`

export const Row = styled.div`
    flex-grow: 1;
    display: flex;
    min-width: 83%;
    max-width: 83%;
    align-self: center;
    flex-shrink: 0;

    &:after {
        content: "";
        display: table;
        clear: both;
    }
`
