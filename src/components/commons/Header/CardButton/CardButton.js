import * as styled from './CardButton.css';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAppSelector } from '../../../../Store';
import { useNavigation } from '../../../../utils/hooks/useNavigation';
import React from 'react';

const CardButton = () => {
  const { navigateTo } = useNavigation();
  const numItems = useAppSelector((state) => state.cart.length);

  return (
    <styled.CartButtonWrapper data-testid="cart-button" onClick={() => navigateTo('/cart')}>
      <FontAwesomeIcon icon={faShoppingCart} />
      {numItems > 0 && <styled.Badge data-testid="cart-badge">{numItems}</styled.Badge>}
    </styled.CartButtonWrapper>
  );
};

export { CardButton as CardButtom };
