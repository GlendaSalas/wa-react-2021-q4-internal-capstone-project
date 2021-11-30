import './Header.css';
import 'font-awesome/css/font-awesome.min.css';
import logo from './../../logo.svg';
import React from 'react';

function Header() {
  return (
    <header className="Header">
      <a href="/" className="logo">
        <img src={logo} className="Logo" alt="logo" />
        Muebles RR
      </a>
      <nav className="Nav">
        <a href="/">
          <i className="fa fa-search"></i>
        </a>
        <a href="/">
          <i className="fa fa-shopping-cart"></i>
        </a>
      </nav>
    </header>
  );
}

export default Header;
