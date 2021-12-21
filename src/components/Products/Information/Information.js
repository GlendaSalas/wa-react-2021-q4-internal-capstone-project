/* eslint-disable react/prop-types */
import React from 'react';
import StyledGeneral from '../../commons/StylesGeneral/StylesG';

import * as S from './Information.css';

const ProductInfo = (props) => {
  return (
    <S.ProductInfoWrapper>
      <StyledGeneral variant="h2" color="#075050" data-testid="product-detail-price">
        {props.product.price.toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
        })}
      </StyledGeneral>
      <StyledGeneral variant="h6" color="#666" data-testid="product-detail-category-and-tags">
        {`Stock: ${props.product.stock}, Category: ${props.product.categorySlug}, Tags:
        ${props.product.tags?.join(' - ')}`}
      </StyledGeneral>
    </S.ProductInfoWrapper>
  );
};

export { ProductInfo };
