import React from 'react';
import { FlexDiv } from '../../common/commoncomponents';
import styled from 'styled-components'

const StartNameHeader = styled.header`
  min-width: 27vw;
}
`

const AppIcon = styled.img`
  max-width: 9rem;
  max-height: 9rem;
  margin-top: 1rem;
`

const AppTitle = styled.h1`
  margin-top: 0;
  margin-bottom: -2px;
  color: var(--action-color);
  font-size: 3rem;
  font-weight: normal;
  text-align: left;
  font-family:'Laser Corps Halftone Regular';
`

const TagLine = styled.span`
  margin: 0 1rem;
  color: var(--action-color);
  font-size: 0.8rem;
`

const Hr = styled.hr`
  width: 4rem;
  color: var(--action-color)
`

const HR = () => <span><Hr /></span>;

const AppHeader = () => {
  return (
      <StartNameHeader>
          <AppIcon src={'../../images/icons/awesome-keyboard.png'} alt="fast-fingers" />
          <AppTitle>fast fingers</AppTitle>
          <FlexDiv>
              <HR/>
                  <TagLine>the ultimate typing game</TagLine>
              <HR/>
          </FlexDiv>
      </StartNameHeader>
    )
}

export default AppHeader