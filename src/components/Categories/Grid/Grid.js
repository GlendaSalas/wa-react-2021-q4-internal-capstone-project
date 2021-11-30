/* eslint-disable react/prop-types */
import { GridCategories } from './Grid.css';
import CategoryCard from '../Card/Card';
import React from 'react';

const grid = (props) => {
  return (
    <GridCategories>
      {props.categories.map((category, idx) => (
        <CategoryCard category={category} key={`category_grid_${idx}`} />
      ))}
    </ GridCategories>
  );
};

export { grid as GridCategories };
