import { FooterWraper } from './Footer.css.js';
import React from 'react';

const Footer = () => {
  return (
    <FooterWraper style={{ display: 'grid', 'text-align': 'center' }}>
      Ecommerce created during Wizeline’s Academy React Bootcamp
      <small>@GlendaSalas</small>
    </FooterWraper>
  );
};

export default Footer;
