import React from 'react';
import { FooterWraper } from './Footer.css.js';

const Footer = () => {
  return (
    <FooterWraper style={{ display: 'grid', 'text-align': 'center', padding: '30px 0 0 30px', 'font-size': '20px' }}>
      <div>
        Ecommerce created during Wizeline’s Academy React Bootcamp
      </div>
      <div>
      @GlendaSalas
      </div>
    </FooterWraper>
  );
};

export default Footer;
