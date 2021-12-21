/* eslint-disable react/prop-types */
import * as styled from './Card.css.js';
import { AddToCartButton } from '../../Cart/Add/Add';
import { formatPrice } from '../../../utils/products';
import { Link } from 'react-router-dom';
import Card from '../../commons/Card/Card';
import React from 'react';

const card = (props) => {
  const { product } = props;
  return (
    <>
      <Card height={200} width={100}>
        <Link to={`/product/${product.id}`}>
          <styled.ProductImage src={product.imageUrl} loading="lazy" />
          <styled.ProductTitle variant="h3" align="center">
            {product.name}
          </styled.ProductTitle>
          <styled.ProductPrice variant="h3">{formatPrice(product.price)}</styled.ProductPrice>
          <styled.ProductStock variant="h6">Stock: {product.stock}</styled.ProductStock>
          <styled.ProductSku variant="h6">SKU: {product.sku}</styled.ProductSku>
          <styled.ProductSlug variant="h6" color="#838988">
            Category: {product.categorySlug}
          </styled.ProductSlug>
        </Link>
        <AddToCartButton product={product} data-testid="product-card-add-to-cart-button" />
      </Card>
    </>
  );
};

export { card as ProductCard };
