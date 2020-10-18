import styled from "styled-components";

export const PlayerDetails = styled.div`
  flex-grow: 1;
  text-align: left;
`

export const PlayerName = styled.div`
  text-align: left;
`

export const AppName = styled.span`
  font-size: 2.5rem;
  text-align: right;
  font-family:'Laser Corps Halftone Regular';

  @media screen and (max-width:600px) {
    font-size: 1.5rem;
  }
`

export const Header = styled.header`
  display: flex;
  padding: 1rem 0rem;
  min-width: 83%;
  max-width: 83%;
  align-self: center;
  color: var(--action-color);

  @media screen and (max-width:600px) {
    padding: 0.5rem 0rem;
    min-width: 100%;
    max-width: 100%;
  }
`
