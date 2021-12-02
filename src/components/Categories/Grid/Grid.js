/* eslint-disable react/style-prop-object */
/* eslint-disable react/jsx-pascal-case */
/* eslint-disable react/prop-types */
import CategoryCard from '../Card/Card.jsx';
import GridCategories from './Grid.css';
import React from 'react';

const grid = (props) => {
  return (
    <GridCategories id="1">
      {props.categories.map((category, idx) => (
        <CategoryCard category={category} key={`category_grid_${idx}`} />
      ))}
    </GridCategories>
  );
};

export { grid as GridCategories };
