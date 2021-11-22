import * as styled from './Categories.css';
import { GridCategories } from './Grid/Grid';
import getCategories from '../../services/categories/categories';
import React from 'react';

const Categories = () => {
  const categories = getCategories();
  return React.createElement(
    styled.CategoriesWrapper,
    null,
    React.createElement(styled.Title, null, 'Categories'),
    React.createElement(GridCategories, { categories: categories })
  );
};

export default Categories;
