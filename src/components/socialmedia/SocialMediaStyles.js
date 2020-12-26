import styled from 'styled-components'

export const SocialMediaWrapper = styled.div`
  position: fixed;
  right: 2rem;
  top: 45%;
  max-width: 2rem;

  @media screen and (max-width:600px) {
    top: 33%;
    right: 1.2rem;
  }
`

export const SocialMediaLink = styled.a`
  font-size: 1rem;
  margin-right: 0.3rem;
  min-width: 2rem;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  text-align: center;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgColor};
  margin-bottom: 1rem;

  @media only screen and (max-width:600px) {
    width: 2.5rem;
    height: 2.5rem;
    margin-bottom: 2rem;
  }
`