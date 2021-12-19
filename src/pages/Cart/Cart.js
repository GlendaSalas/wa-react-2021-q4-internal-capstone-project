import { CartItem } from '../../components/Cart/Item/Item';
import { clearItems } from './Slice';
import { formatPrice } from '../../utils/products';
import { NoCartItems } from '../../components/Cart/NoItem/NoItem';
import { useAppDispatch, useAppSelector } from '../../Store';
import { useNavigation } from '../../utils/hooks/useNavigation';
import Button from '../../components/commons/Button/Button';
import Layout from '../../components/Layout/Layout';
import React, { useMemo } from 'react';
import StyledGenel from '../../components/commons/StylesGeneral/StylesG';

import * as S from './Cart.css';

export const Cart = () => {
  const { navigateTo } = useNavigation();
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart);
  const total = useMemo(
    () =>
      cartItems.reduce((prev, current, idx, array) => {
        return array[idx].product.price * array[idx].quantity + prev;
      }, 0),
    [cartItems]
  );

  const handleClearItems = () => {
    dispatch(clearItems());
  };

  if (cartItems.length === 0) {
    return (
      <Layout>
        <NoCartItems />
      </Layout>
    );
  }

  return (
    <Layout>
      <>
        <h1>Shopping Cart</h1>
        <Button onClick={handleClearItems} color="red">
          Remove all
        </Button>
        {cartItems.map((item) => (
          <CartItem cartItem={item} quantityEditable />
        ))}
        <S.TotalWrapper>
          <Button
            onClick={() => {
              navigateTo('/checkout');
            }}
          >
            Proceed to checkout
          </Button>
          <StyledGenel variant="h2">Total: {formatPrice(total)} </StyledGenel>
        </S.TotalWrapper>
      </>
    </Layout>
  );
};
