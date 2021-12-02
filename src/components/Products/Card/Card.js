/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import * as styled from './Card.css.js';
import Card from '../../commons/Card/Card';
import React from 'react';
import Styles from '../../commons/StylesGeneral/StylesG';

const card = (props) => {
  const { product } = props;
  console.log(product);
  return (
    <>
      <Card height={200} width={100}>
        <styled.ProductImage src={product.imageUrl} loading="lazy" />
        <Styles variant="h3" align="center">
          {product.name}
        </Styles>
        <styled.ProductPrice variant="h3" color="#3c2239">
          {product.price.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
          })}
        </styled.ProductPrice>
        <styled.ProductStock variant="h6" color="#838988">
          Stock: {product.stock}
        </styled.ProductStock>
        <styled.ProductSku variant="h6" color="#838988">
          SKU: {product.sku}
        </styled.ProductSku>
        <styled.ProductSlug variant="h6" color="#838988">
          Category: {product.categorySlug}
        </styled.ProductSlug>
      </Card>
    </>
  );
};

export { card as ProductCard };
