/* eslint-disable react/prop-types */
import * as styled from './Button.css.js';
import React from 'react';

const ButtonR = (props) => {
  return (
    <styled.ButtonStyle data-testid={props['data-testid']} onClick={props.onClick} disabled={props.disabled}>
      {props.children}
    </styled.ButtonStyle>
  );
};

export default ButtonR;
