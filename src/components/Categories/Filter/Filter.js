/* eslint-disable react/prop-types */
import * as styled from './Filter.css';
import Button from '../../commons/Button/Button';
import getCategories from '../../../services/categories/categories';
import React from 'react';
import StyledGeneral from '../../commons/StylesGeneral/StylesG';

const filter = (props) => {
  const categories = getCategories();
  return React.createElement(
    'div',
    null,
    React.createElement(StyledGeneral, { variant: 'h4' }, 'Filters'),
    React.createElement(
      styled.CategoriesFilterContainerWrapper,
      null,
      React.createElement(StyledGeneral, { variant: 'h6', color: '#878281' }, 'By category'),
      React.createElement(
        styled.CategoriesFilterItemsWrapper,
        null,
        categories.map((category) =>
          React.createElement(
            styled.CategoriesFiltersButtonWrapper,
            { key: category.id },
            React.createElement(
              Button,
              { onClick: () => props.onSelectFilter(category.id), key: category.id },
              props.filters.indexOf(category.id) > -1
                ? React.createElement(styled.CategorySelected, null, category.name)
                : category.name
            )
          )
        )
      )
    )
  );
};

export { filter as CategoriesFilter };
