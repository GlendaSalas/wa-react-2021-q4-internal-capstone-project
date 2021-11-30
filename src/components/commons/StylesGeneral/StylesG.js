/* eslint-disable react/prop-types */
import * as styled from './StylesG.css';
import React from 'react';

const StylesG = (props) => {
  switch (props.variant) {
    default:
    case 'h1':
      return (
        <styled.H1 color={props.color} align={props.align}>
          {props.children}
        </styled.H1>
      );
    case 'h2':
      return (
        <styled.H2 color={props.color} align={props.align}>
          {props.children}
        </styled.H2>
      );
    case 'h3':
      return (
        <styled.H3 color={props.color} align={props.align}>
          {props.children}
        </styled.H3>
      );
    case 'h4':
      return (
        <styled.H4 color={props.color} align={props.align}>
          {props.children}
        </styled.H4>
      );
    case 'h5':
      return (
        <styled.H5 color={props.color} align={props.align}>
          {props.children}
        </styled.H5>
      );
    case 'h6':
      return (
        <styled.H6 color={props.color} align={props.align}>
          {props.children}
        </styled.H6>
      );
    case 'p':
      return (
        <styled.P color={props.color} align={props.align}>
          {props.children}
        </styled.P>
      );
    case 'span':
      return (
        <styled.Span color={props.color} align={props.align}>
          {props.children}
        </styled.Span>
      );
  }
};

export default StylesG;
