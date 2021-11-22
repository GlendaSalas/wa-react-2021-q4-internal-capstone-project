/* eslint-disable react/prop-types */
import * as style from './Layout.style';
import Footer from '../commons/Footer/Footer';
import Header from '../commons/Header/Header';
import React from 'react';

const Layout = (props) => {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(Header, null),
    React.createElement(style.default, null, props.children),
    React.createElement(Footer, null)
  );
};

export default Layout;
