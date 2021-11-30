/* eslint-disable react/prop-types */
import * as style from './Layout.style';
import Footer from '../commons/Footer/Footer';
import Header from '../commons/Header/Header';
import React from 'react';

const Layout = (props) => {
  return (
    <>
      <Header />
      <style.default>{props.children}</style.default>
      <Footer />
    </>
  );
};

export default Layout;
