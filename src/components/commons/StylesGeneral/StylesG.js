/* eslint-disable react/prop-types */
import * as styled from './StylesG.css';
import React from 'react';

const StylesG = (props) => {
  switch (props.variant) {
    default:
    case 'h1':
      return React.createElement(styled.H1, { color: props.color, align: props.align }, props.children);
    case 'h2':
      return React.createElement(styled.H2, { color: props.color, align: props.align }, props.children);
    case 'h3':
      return React.createElement(styled.H3, { color: props.color, align: props.align }, props.children);
    case 'h4':
      return React.createElement(styled.H4, { color: props.color, align: props.align }, props.children);
    case 'h5':
      return React.createElement(styled.H5, { color: props.color, align: props.align }, props.children);
    case 'h6':
      return React.createElement(styled.H6, { color: props.color, align: props.align }, props.children);
    case 'p':
      return React.createElement(styled.P, { color: props.color, align: props.align }, props.children);
    case 'span':
      return React.createElement(styled.Span, { color: props.color, align: props.align }, props.children);
  }
};

export default StylesG;
