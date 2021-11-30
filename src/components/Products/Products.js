import * as styled from './Products.css.js';
import { getFeaturedProducts } from '../../services/products/products';
import { GridProduct } from './Grid/Grid';
import { useNavigation } from '../../utils/hooks/useNavigation';
import Button from '../commons/Button/Button';
import React from 'react';

const Products = (props) => {
  const { navigateTo } = useNavigation();
  const products = getFeaturedProducts(5);
  return (
    <styled.ProductsWrapper>
      <div style={{ display: 'grid', 'text-align': 'center' }}>
        <styled.Title>Products</styled.Title>
        <GridProduct products={products} />
        <div style={{ display: 'grid', 'text-align': 'center', background: '#f7e3e09c' }}>
          <Button onClick={() => {navigateTo("/products"); }} >
            (View all)
          </Button>
        </div>
      </div>
    </styled.ProductsWrapper>
  );
};

export default Products;
