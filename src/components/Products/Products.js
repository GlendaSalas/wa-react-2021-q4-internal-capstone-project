import * as styled from './Products.css.js';
import { GridProduct } from './Grid/Grid';
import { useNavigation } from '../../utils/hooks/useNavigation';
import Button from '../commons/Button/Button';
import React from 'react';

import { useFeaturedProducts } from '../../utils/hooks/useFeaturedProducts';

const Products = (props) => {
  const { navigateTo } = useNavigation();
  const { data, isLoading } = useFeaturedProducts();
  return (
    <styled.ProductsWrapper>
      {data && !isLoading && (
        <>
          <div style={{ display: 'flex' }}>
            <styled.Title>
              Products
              <Button
                onClick={() => {
                  navigateTo('/products');
                }}
              >
                ( View all )
              </Button>
            </styled.Title>
            <GridProduct
              products={data.products}
              pagination={data.pagination}
              onSetPage={() => {}}
              showPagination={false}
            />
          </div>
        </>
      )}
    </styled.ProductsWrapper>
  );
};

export default Products;
