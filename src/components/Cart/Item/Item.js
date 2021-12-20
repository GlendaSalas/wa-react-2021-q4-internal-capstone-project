/* eslint-disable react/prop-types */
import * as S from './Item.css';
import { addOrUpdateItem, removeItem } from '../../../pages/Cart/Slice';
import { formatPrice } from '../../../utils/products';
import { useAppDispatch } from '../../../Store';
import Button from '../../commons/Button/Button';
import React from 'react';
import StyledGeneral from '../../commons/StylesGeneral/StylesG';

const CartItem = (props) => {
  const dispatch = useAppDispatch();
  const handleUpdate = (event, cartItem) => {
    const quantity = parseFloat(event.currentTarget.value);
    dispatch(addOrUpdateItem(Object.assign(Object.assign({}, cartItem), { quantity })));
  };
  const handleRemove = (cartItem) => {
    dispatch(removeItem(cartItem));
  };
  const items = new Array(props.cartItem.product.stock);
  items.fill(1);

  return (
    <S.CartItemWrapper>
      <S.CartItemImageWrapper>
        <S.CartItemImage src={props.cartItem.product.imageUrl} />
        {props.quantityEditable && <Button onClick={() => handleRemove(props.cartItem)}>Remove</Button>}
      </S.CartItemImageWrapper>

      <S.CartProductInfo>
        <StyledGeneral variant="h4">{props.cartItem.product.name}</StyledGeneral>
        <StyledGeneral variant="h6" color="#666">
          SKU: {props.cartItem.product.sku}
        </StyledGeneral>
        <StyledGeneral variant="h4" color="#526b89">
          Price: {formatPrice(props.cartItem.product.price)}
        </StyledGeneral>
      </S.CartProductInfo>

      <S.CartItemSubTotal>
        <StyledGeneral variant="h4">Quantity:</StyledGeneral>
        {props.quantityEditable ? (
          <S.Select onChange={(event) => handleUpdate(event, props.cartItem)} value={props.cartItem.quantity}>
            {items.map((item, idx) => (
              <option value={idx + 1} key={`cart_quantity_${idx}`}>
                {idx + 1}
              </option>
            ))}
          </S.Select>
        ) : (
          <div style={{ marginRight: '8px' }}>
            <StyledGeneral variant="h4">{props.cartItem.quantity}</StyledGeneral>
          </div>
        )}
        <StyledGeneral variant="h4">
          Subtotal:
          {formatPrice(props.cartItem.product.price * props.cartItem.quantity)}
        </StyledGeneral>
      </S.CartItemSubTotal>
    </S.CartItemWrapper>
  );
};

export { CartItem };
