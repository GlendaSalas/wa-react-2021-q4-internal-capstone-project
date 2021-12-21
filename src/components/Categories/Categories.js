import * as styled from './Categories.css';
import { GridCategories } from './Grid/Grid';
import getCategories from '../../services/categories/categories';
import React from 'react';

const Categories = () => {
  const categories = getCategories();
  return (
    <styled.CategoriesWrapper>
      <styled.Title data-testid="categories-title">Categories</styled.Title>
      <GridCategories categories={categories} />
    </styled.CategoriesWrapper>
  );
};

export default Categories;
