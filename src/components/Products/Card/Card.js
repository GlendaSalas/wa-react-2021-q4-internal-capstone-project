/* eslint-disable react/prop-types */
import * as styled from './Card.css.js';
import { Link } from 'react-router-dom';
import Button from '../../commons/Button/Button';
import Card from '../../commons/Card/Card';
import React from 'react';

const card = (props) => {
  const { product } = props;
  return (
    <>
      <Link to={`/product/${product.id}`}>
        <Card height={200} width={100}>
          <styled.ProductImage src={product.imageUrl} loading="lazy" />
          <styled.ProductTitle variant="h3" align="center">
            {product.name}
          </styled.ProductTitle>
          <styled.ProductPrice variant="h3">
            {product.price.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            })}
          </styled.ProductPrice>
          <styled.ProductStock variant="h6">Stock: {product.stock}</styled.ProductStock>
          <styled.ProductSku variant="h6">SKU: {product.sku}</styled.ProductSku>
          <styled.ProductSlug variant="h6" color="#838988">
            Category: {product.categorySlug}
          </styled.ProductSlug>
          <Button onClick={() => {}}>Add to cart</Button>
        </Card>
      </Link>
    </>
  );
};

export { card as ProductCard };
