/* eslint-disable react/prop-types */
import * as styled from './Card.css';
import Card from '../../commons/Card/Card';
import React from 'react';
import Styles from '../../commons/StylesGeneral/StylesG';

const CategoryCard = (props) => {
  return (
    <Card style={{ height: 200, width: 250, 'background-color': '#f7e3e0' }}>
      <styled.CategoryCardImage src={props.category.imageUrl} loading='lazy' />
      <Styles style={{ variant: 'h4' }} name={ props.category.name } />
    </Card>);
};

export default CategoryCard;
