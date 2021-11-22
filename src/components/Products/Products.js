import * as styled from './Products.css.js';
import { getFeaturedProducts } from '../../services/products/products';
import { GridProduct } from './Grid/Grid';
import { useNavigation } from '../../utils/hooks/useNavigation';
import Button from '../commons/Button/Button';
import React from 'react';

const Products = (props) => {
  const { navigateTo } = useNavigation();
  const products = getFeaturedProducts(5);
  return React.createElement(
    styled.ProductsWrapper,
    null,
    React.createElement(
      'div',
      { style: { display: 'grid', 'text-align': 'center' } },
      React.createElement(styled.Title, null, 'Products')
    ),
    React.createElement(GridProduct, { products: products }),
    React.createElement(
      'div',
      { style: { display: 'grid', 'text-align': 'center', background: '#f7e3e09c' } },
      React.createElement(
        Button,
        {
          onClick: () => {
            navigateTo('/products');
          },
        },
        '( View all )'
      )
    )
  );
};

export default Products;
