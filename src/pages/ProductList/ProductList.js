import * as S from './ProductList.css.js';
import { CategoriesFilters } from '../../components/Categories/Filter/Filter';
import { GridProduct } from '../../components/Products/Grid/Grid';
import { useHistory, useLocation } from 'react-router';
import GeneralStyled from '../../components/commons/StylesGeneral/StylesG';
import Layout from '../../components/Layout/Layout';
import LoadingView from '../../components/commons/Loader/Loader';
import React, { useEffect, useState } from 'react';
import useProducts from '../../utils/hooks/useProducts';

const ProductList = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const history = useHistory();

  const search = useLocation().search;
  const searchParam = new URLSearchParams(search);
  const page = parseInt(searchParam.get('page') || '1');

  const { data, isLoading } = useProducts([], page);

  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    if (data && !isLoading) {
      const products = data.products;
      if (filters.length === 0) {
        setProducts(products);
      } else {
        setProducts(products.filter((product) => filters.indexOf(product.categorySlug) !== -1));
      }
    }
  }, [filters, data, isLoading]);
  const handleSelectFilter = (filter) => {
    const filterIdx = filters.indexOf(filter);
    if (filterIdx === -1) {
      setFilters((oldFilters) => [...oldFilters, filter]);
      return;
    }
    setFilters((oldFilters) => [...oldFilters.filter((item, idx) => idx !== filterIdx)]);
  };
  const handleClearFilter = () => {
    setFilters([]);
  };
  const handleSetPage = (page) => {
    history.push({
      pathname: '/products',
      search: `?page=${page}`,
    });
  };
  if (!data && isLoading) {
    return <LoadingView />;
  }
  return (
    <>
      {data && (
        <Layout>
          <S.ProductListWrapper>
            <S.CategoriesFilterWrapper>
              <CategoriesFilters
                onSelectFilter={handleSelectFilter}
                onClearFilter={handleClearFilter}
                filters={filters}
              />
            </S.CategoriesFilterWrapper>
            <S.ProductsWrapper>
              {products.length ? (
                <GridProduct
                  products={products}
                  pagination={data?.pagination}
                  onSetPage={(page) => handleSetPage(page)}
                  showPagination={true}
                />
              ) : (
                <GeneralStyled variant="h2">No results found</GeneralStyled>
              )}
            </S.ProductsWrapper>
          </S.ProductListWrapper>
        </Layout>
      )}
    </>
  );
};

export default ProductList;
