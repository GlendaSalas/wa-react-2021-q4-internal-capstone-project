/* eslint-disable react/prop-types */
import CardWrapper from './Card.css.js';
import React from 'react';

const Card = (props) => {
  return React.createElement(CardWrapper, { height: props.width, width: props.width }, props.children);
};

export default Card;
