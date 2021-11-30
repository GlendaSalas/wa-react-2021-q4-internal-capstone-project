import * as styled from './ProductList.css.js';
import { CategoriesFilter } from '../../components/Categories/Filter/Filter';
import { getProducts } from '../../services/products/products';
import { GridProduct } from '../../components/Products/Grid/Grid';
import { Pagination } from '../../components/commons/Pagination/Pagination';
import Layout from '../../components/Layout/Layout';
import React, { useEffect, useState } from 'react';
import StyleG from '../../components/commons/StylesGeneral/StylesG';

export const ProductList = () => {
  const [products, setProducts] = useState(getProducts());
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    const products = getProducts();
    if (filters.length === 0) {
      setProducts(products);
    } else {
      setProducts(products.filter((product) => filters.indexOf(product.category) !== -1));
    }
  }, [filters]);

  const handleSelectFilter = (filter) => {
    const filterIdx = filters.indexOf(filter);
    if (filterIdx === -1) {
      setFilters((oldFilters) => [...oldFilters, filter]);
      return;
    }
    setFilters((oldFilters) => [...oldFilters.filter((item, idx) => idx !== filterIdx)]);
  };

  return React.createElement(
    Layout,
    null,
    React.createElement(
      styled.ProductListWrapper,
      null,
      React.createElement(
        styled.CategoriesFilterWrapper,
        null,
        React.createElement(CategoriesFilter, { onSelectFilter: handleSelectFilter, filters: filters })
      ),
      React.createElement(
        styled.ProductsWrapper,
        null,
        products.length
          ? React.createElement(GridProduct, { products: products })
          : React.createElement(StyleG, { variant: 'h2' }, 'No results found')
      )
    ),
    React.createElement(styled.PaginationWrapper, null, React.createElement(Pagination, null))
  );
};
