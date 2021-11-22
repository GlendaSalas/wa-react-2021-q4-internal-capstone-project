import React from 'react';
import styled from './Footer.css.js';

const Footer = () => {
  return React.createElement(
    styled,
    null,
    React.createElement(
      'div',
      { style: { display: 'grid', 'text-align': 'center', padding: '30px 0 0 30px', 'font-size': '20px' } },
      'Ecommerce created during Wizeline’s Academy React Bootcamp '
    ),
    React.createElement(
      'div',
      { style: { display: 'grid', 'text-align': 'center', 'font-size': '10px' } },
      '@GlendaSalas'
    )
  );
};

export default Footer;
