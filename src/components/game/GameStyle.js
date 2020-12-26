import styled from "styled-components";

export const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 0.5rem;
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

  @media screen and (max-width:600px) {
    width: auto;
    min-width: 100%;
    max-width: 100%;
  }
`

export const Column = styled.div`
  float: left;
  width:  ${props => props.sidebar ? '25%' :'75%'};
  display: ${props => props.mobile ? 'none' : props.gameprogress ? 'flex' : 'block'};
  flex-direction: ${props => props.gameprogress ? 'column': 'inherit'};
  align-items: ${props => props.gameprogress ? 'center': 'inherit'};
  flex-grow: 1;
`

export const TableRow = styled.tr`
  margin: 0.5rem 0;
  display:table;
  width:100%;
  table-layout:fixed;
`

export const TableColumn = styled.td`
   padding: 0.2rem 2rem;
`

export const TableHead = styled(TableRow)`
   width: calc( 100% - 1em )
`

export const TableHeader = styled.th`
  border-bottom: 1px solid yellow;
  text-align: center;
  padding: 0.5rem 1rem;
`

export const GameQualitySpan = styled.span`
  background-color: rgb(11, 244, 0);
  width: 5rem;
  border-radius: 4px;
  margin: 0.2rem 1rem;
  display: inline-block;
  text-align: center;
`