/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable react/prop-types */
import { GridWrapper } from './Grid.css.js';
import { ProductCard } from '../Card/Card';
import React from 'react';

const grid = (props) => {
  return (
    <>
      <GridWrapper>
        {props.products.map((product) => (
          <ProductCard product={product} key={`${product.id}`} />
        ))}
      </GridWrapper>
    </>
  );
};

export { grid as GridProduct };
