/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable react/prop-types */
import { GridWrapper } from './Grid.css.js';
import { Pagination } from '../../commons/Pagination/Pagination';
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
      {props.showPagination && (
        <div>
          <Pagination
            totalPages={props.pagination.totalPages}
            page={props.pagination.page}
            totalResults={props.pagination.totalPages}
            onSetPage={props.onSetPage}
          />
        </div>
      )}
    </>
  );
};

export { grid as GridProduct };
