/* eslint-disable react/prop-types */
import * as styled from './Button.css.js';
import React from 'react';

const ButtonR = (props) => {
  return React.createElement(styled.ButtonStyle, { onClick: props.onClick }, props.children);
};

export default ButtonR;
