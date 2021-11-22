import * as styled from './Header.css.js';
import { CardButtom } from './CardButton/CardButton';
import { Input } from './Input/Input';
import { Logo } from './Logo/Logo';
import React from 'react';

const Header = () => {
  return React.createElement(
    styled.HeaderWrapper,
    null,
    React.createElement(Logo, null),
    React.createElement(Input, null),
    React.createElement(CardButtom, null)
  );
};

export default Header;
