/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable react/prop-types */
import * as styled from './Grid.css.js';
import { ProductCard } from '../Card/Card';
import React from 'react';

const grid = (props) => {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      styled.GridWrapper,
      null,
      props.products.map((product) =>
        React.createElement(ProductCard, {
          product: product,
          key: `${product.id}`,
        })
      )
    )
  );
};

export { grid as GridProduct };
