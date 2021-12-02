/* eslint-disable react/prop-types */
import * as styled from './Card.css';
import Card from '../../commons/Card/Card';
import React from 'react';

const CategoryCard = (props) => {
  return (
    <Card height="50" width="100" background-color="#f7e3e0">
      <styled.CategoryCardImage src={props.category.imageUrl} loading='"lazy"' />
      <styled.CategoryName variant="h6">{props.category.name}</styled.CategoryName>
    </Card>
  );
};

export default CategoryCard;
