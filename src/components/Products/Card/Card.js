/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import * as styled from './Card.css.js';
import Card from '../../commons/Card/Card';
import React from 'react';
import styleG from '../../commons/StylesGeneral/StylesG';

const card = (props) => {
  const { product } = props;
  return (
    <>
      <Card height={300} width={200}>
        <styled.ProductImage src={product.imageUrl} loading="lazy" />
        <styleG variant="h5" color="#838988">
          SKU: {product.sku}
        </styleG>
        <styleG variant="h3" align="center">
          {product.name}
        </styleG>
        <styleG variant="h6" color="#838988">
          Stock: {product.stock}
        </styleG>
        <styleG variant="h4" color="#3c2239">
          {product.price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </styleG>
      </Card>
    </>
  );
};

export { card as ProductCard };
