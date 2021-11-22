/* eslint-disable react/prop-types */
import * as styled from './Card.css';
import Card from '../../commons/Card/Card';
import React from 'react';
import Styles from '../../commons/StylesGeneral/StylesG';

const CategoryCard = (props) => {
  return React.createElement(
    Card,
    { height: 200, width: 250, 'background-color': '#f7e3e0' },
    React.createElement(styled.CategoryCardImage, { src: props.category.imageUrl, loading: 'lazy' }),
    React.createElement(Styles, { variant: 'h4' }, props.category.name)
  );
};

export default CategoryCard;
