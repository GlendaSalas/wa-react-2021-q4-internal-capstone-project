/* eslint-disable react/prop-types */
import * as styled from './Card.css.js';
import Card from '../../commons/Card/Card';
import React from 'react';
import styleG from '../../commons/StylesGeneral/StylesG';

const card = (props) => {
  const { product } = props;
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      Card,
      { height: 300, width: 200 },
      React.createElement(styled.ProductImage, { src: product.imageUrl, loading: 'lazy' }),
      React.createElement(styleG, { variant: 'h5', color: '#838988' }, 'SKU: ', product.sku),
      React.createElement(styleG, { variant: 'h3', align: 'center' }, product.name),
      React.createElement(styleG, { variant: 'h6', color: '#838988' }, 'Stock: ', product.stock),
      React.createElement(
        styleG,
        { variant: 'h4', color: '#3c2239' },
        product.price.toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
        })
      )
    )
  );
};

export { card as ProductCard };
