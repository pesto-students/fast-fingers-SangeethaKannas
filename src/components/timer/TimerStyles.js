import styled from "styled-components";

export const Circle = styled.circle`
  cx: 50%;
  cy: 50%;
  transition: stroke-dashoffset 1s linear;
  stroke-width: 0.8rem;
  fill: transparent;
  stroke: ${props => props.base ? '#3C4749' :'var(--action-color)'};
`
export const Svg = styled.svg`
  display: block;
  margin: auto;
`;

export const Text = styled.text`
  text-anchor: middle;
  fill: white;
  font-size: 1.5rem;
`

export const FontAwesomeSVG = styled(Text)`
  font-family: FontAwesome;

  @media screen and (max-width:600px) {
    font-size : 2.1rem;
  }

`