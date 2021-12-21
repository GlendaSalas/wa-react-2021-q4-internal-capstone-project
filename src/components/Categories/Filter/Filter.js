/* eslint-disable react/prop-types */
import * as S from './Filter.css';
import { Skeleton } from '../../commons/Skeleton/Skeleton';
import { useFeaturedCategories } from '../../../utils/hooks/useFeaturedCategories';
import Button from '../../commons/Button/Button';
import React from 'react';
import StylesGeneral from '../../commons/StylesGeneral/StylesG';

const CategoriesFilters = (props) => {
  const { data, isLoading } = useFeaturedCategories();
  if (isLoading) {
    React.createElement(Skeleton, { height: '400px', width: '100%' });
  }
  return (
    <>
      {data && !isLoading && (
        <div>
          <StylesGeneral variant="h4">Filters</StylesGeneral>

          <S.CategoriesFilterContainerWrapper>
            <StylesGeneral variant="h6">By category</StylesGeneral>

            <S.CategoriesFilterItemsWrapper>
              {data.map((category) => (
                <S.CategoriesFiltersButtonWrapper key={category.slug} data-testid="category-filter">
                  <Button onClick={() => props.onSelectFilter(category.slug)} key={category.id}>
                    {props.filters.indexOf(category.slug) > -1 ? (
                      <S.CategorySelected>{category.name}</S.CategorySelected>
                    ) : (
                      category.name
                    )}
                  </Button>
                </S.CategoriesFiltersButtonWrapper>
              ))}

              <Button onClick={() => props.onClearFilter()}>
                <b>
                  <StylesGeneral variant="h3" align="center">
                    Clear All
                  </StylesGeneral>
                </b>
              </Button>
            </S.CategoriesFilterItemsWrapper>
          </S.CategoriesFilterContainerWrapper>
        </div>
      )}
    </>
  );
};
export { CategoriesFilters };
