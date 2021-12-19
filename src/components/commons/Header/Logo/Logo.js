import * as styled from './Logo.css.js';
import { useNavigation } from '../../../../utils/hooks/useNavigation';
import LogoImage from '../../../../assets/logo.png';
import React from 'react';

export const Logo = () => {
  const { navigateTo } = useNavigation();
  return <styled.LogoImg src={LogoImage} onClick={() => navigateTo('/')} />;
};
