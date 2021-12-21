import { CartItem } from '../../components/Cart/Item/Item';
import { CheckoutForm } from '../../components/Checkout/Form';
import { NoCartItems } from '../../components/Cart/NoItem/NoItem';
import { useAppSelector } from '../../Store';
import { useNavigation } from '../../utils/hooks/useNavigation';
import Button from '../../components/commons/Button/Button';
import Layout from '../../components/Layout/Layout';
import React, { useMemo } from 'react';
import StyledGeneral from '../../components/commons/StylesGeneral/StylesG';

import * as S from './Checkout.css';

const Checkout = () => {
  const { navigateTo } = useNavigation();

  const cartItems = useAppSelector((state) => state.cart);
  const total = useMemo(
    () =>
      cartItems.reduce((prev, current, idx, array) => {
        return array[idx].product.price * array[idx].quantity + prev;
      }, 0),
    [cartItems]
  );

  if (cartItems.length === 0) {
    return (
      <Layout>
        <NoCartItems />
      </Layout>
    );
  }

  return (
    <Layout>
      <StyledGeneral variant="h1">Checkout</StyledGeneral>
      <S.SummaryWrapper>
        <StyledGeneral variant="h3">Summary - Total (${total})</StyledGeneral>
        {cartItems.map((item) => (
          <CartItem cartItem={item} />
        ))}
      </S.SummaryWrapper>

      <CheckoutForm />
      <S.Buttons>
        <Button onClick={() => navigateTo('/cart')}>Go back to cart</Button>
        <Button onClick={() => {}}>Place Order</Button>
      </S.Buttons>
    </Layout>
  );
};

export { Checkout };
