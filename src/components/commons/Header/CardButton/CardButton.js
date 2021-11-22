import * as styled from './CardButton.css';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const cardButton = () => {
  return React.createElement(
    styled.CartButtonWrapper,
    null,
    React.createElement(FontAwesomeIcon, { icon: faShoppingCart })
  );
};

export { cardButton as CardButtom };
