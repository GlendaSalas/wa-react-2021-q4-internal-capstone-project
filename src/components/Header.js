import './Header.css';
import 'font-awesome/css/font-awesome.min.css';
import logo from './../logo.svg';
import React from 'react';

function Header() {
  return (
    <header className="Header">
      <img src={logo} className="Logo" alt="logo" />
      <nav className="Nav">
        <a href="/">
          <i class="fa fa-search"></i>
        </a>
        <a href="/">
          <i className="fa fa-shopping-cart"></i>
        </a>
      </nav>
    </header>
  );
}

export default Header;
