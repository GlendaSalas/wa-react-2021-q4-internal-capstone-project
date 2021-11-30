import * as styled from './CardButton.css';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const cardButton = () => {
  return (
    <styled.CartButtonWrapper>
      <FontAwesomeIcon icon={faShoppingCart} />
    </styled.CartButtonWrapper>
  );
};

export { cardButton as CardButtom };
