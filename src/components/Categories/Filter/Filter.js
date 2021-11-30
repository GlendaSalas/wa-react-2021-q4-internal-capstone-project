/* eslint-disable react/prop-types */
import * as styled from './Filter.css';
import Button from '../../commons/Button/Button';
import getCategories from '../../../services/categories/categories';
import React from 'react';
import StyledGeneral from '../../commons/StylesGeneral/StylesG';

const filter = (props) => {
  const categories = getCategories();
  return (
    <div>
      <StyledGeneral variant="h4">Filters</StyledGeneral>

      <styled.CategoriesFilterContainerWrapper>
        <StyledGeneral variant="h6">By category</StyledGeneral>

        <styled.CategoriesFilterItemsWrapper>
          {categories.map((category) => (
            <styled.CategoriesFiltersButtonWrapper key={category.id}>
              <Button onClick={() => props.onSelectFilter(category.id)} key={category.id}>
                {
                  props.filters.indexOf(category.id) > -1 ? (<styled.CategorySelected>{category.name}</styled.CategorySelected>) : (
                    category.name
                  )
                }
              </Button>
            </styled.CategoriesFiltersButtonWrapper>
          ))}
        </styled.CategoriesFilterItemsWrapper>
      </styled.CategoriesFilterContainerWrapper>
    </div>
  );
};

export { filter as CategoriesFilter };
