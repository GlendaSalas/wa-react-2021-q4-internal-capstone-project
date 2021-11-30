import * as styled from './Header.css.js';
import { CardButtom } from './CardButton/CardButton';
import { Input } from './Input/Input';
import { Logo } from './Logo/Logo';
import React from 'react';

const Header = () => {
  return (
    <styled.HeaderWrapper>
      <Logo />
      <Input />
      <CardButtom />
    </styled.HeaderWrapper>
  );
};

export default Header;
