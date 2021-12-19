import CategoryCard from '../Card/Card.jsx';
import GridCategories from './Grid.css';
import React from 'react';

const grid = (props) => {
  return (
    <GridCategories>
      {props.categories.map((category, idx) => (
        <CategoryCard category={category} key={`category_grid_${idx}`} />
      ))}
    </GridCategories>
  );
};

export { grid as GridCategories };
