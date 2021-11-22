/* eslint-disable react/prop-types */
import * as styled from './Grid.css';
import CategoryCard from '../Card/Card';
import React from 'react';

const grid = (props) => {
  return React.createElement(
    styled.GridCategories,
    null,
    props.categories.map((category, idx) =>
      React.createElement(CategoryCard, { category: category, key: `category_grid_${idx}` })
    )
  );
};

export { grid as GridCategories };
