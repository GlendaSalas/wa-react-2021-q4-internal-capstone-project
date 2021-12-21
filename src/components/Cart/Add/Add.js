/* eslint-disable react/prop-types */
import * as S from './Add.css';
import { addOrUpdateItem } from '../../../pages/Cart/Slice';
import { useAppDispatch } from '../../../Store';
import Button from '../../commons/Button/Button';
import React, { useState } from 'react';

const AddToCartButton = (props) => {
  const quantityLimit = props.product.stock;
  const [quantity, setQuantity] = useState(1);
  const dispatch = useAppDispatch();

  const handleClick = (event, product) => {
    event.preventDefault();
    event.stopPropagation();
    dispatch(addOrUpdateItem({ product, quantity: quantity }));
  };

  const handleChange = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setQuantity(parseInt(event.target.value));
  };

  const items = new Array(quantityLimit);
  items.fill(1);
  return (
    <S.AddToCartBottomWrapper>
      <S.Label>Quantity: {quantity}</S.Label>
      <S.Select onChange={handleChange} value={quantity}>
        {items.map((item, idx) => (
          <option value={idx + 1} key={`quantity_${idx}`}>
            {idx + 1}
          </option>
        ))}
      </S.Select>
      <Button
        onClick={(event) => handleClick(event, props.product)}
        data-testid={props['data-testid']}
        style={{ 'background-color': '#198d87' }}
        disabled={props.product.stock === 0}
      >
        Add to cart
      </Button>
    </S.AddToCartBottomWrapper>
  );
};

export { AddToCartButton };
