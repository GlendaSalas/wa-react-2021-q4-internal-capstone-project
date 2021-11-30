/* eslint-disable react/prop-types */
import * as styled from './Button.css.js';
import React from 'react';

const ButtonR = (props) => {
  return (
    <styled.ButtonStyle onClick= {props.onClick} >
      {props.children}
    </styled.ButtonStyle>
  )
};

export default ButtonR;
