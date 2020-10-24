import React from 'react'
import { func, object } from 'prop-types';
import styled from 'styled-components';
import { useState } from 'react';

const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }


  @media screen and (max-width:600px) {
    width: 3rem;
    height: 1.7rem;
  }
`

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 34px;
  background-color: ${({theme}) => theme.colors.bodyText.background};
  border 2px solid ${({theme}) => theme.colors.bodyText.main};


  &::before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 50%;
    background-color: ${({theme}) => theme.colors.bodyText.main};

    @media screen and (max-width:600px) {
      height: 1.2rem;
      width: 1.2rem;
      bottom: 1px;

    }

  }

  &.off {

    &::before {
      left: 4px;
    }
  }

  &.on {

    &::before {
      right: 4px;
    }
  }
`

const Toggle = ({theme, toggleTheme}) => {
  const [selected, setSelected] = useState(true);

  return (
    <Switch>
      <input
        type="checkbox"
        value={selected}
        onChange={() => { setSelected(!selected); toggleTheme();}}
      />
      <Slider className={selected ? 'on': 'off'} >
      </Slider>
    </Switch>
  );

};

Toggle.propTypes = {
  theme: object.isRequired,
  toggleTheme: func.isRequired,
}

export default Toggle;