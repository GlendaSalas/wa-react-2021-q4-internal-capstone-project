import * as styled from './Header.css.js';
import { CardButtom } from './CardButton/CardButton';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Logo } from './Logo/Logo';
import React, { useState } from 'react';

import { ButtonStyle } from '../Button/Button.css';
import { useHistory, useLocation } from 'react-router';
import GeneralStyled from '../StylesGeneral/StylesG';

export const Header = () => {
  const history = useHistory();
  const search = useLocation().search;
  const searchParam = new URLSearchParams(search);
  const searchTerm = searchParam.get('q') || '';

  const [value, setValue] = useState(searchTerm);

  const handleClick = () => {
    history.push({ pathname: '/search', search: `?q=${value}` });
  };

  const handleChange = (event) => {
    setValue(event === null ? 0 : event.target.value);
  };
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      history.push({ pathname: '/search', search: `?q=${value}` });
    }
  };
  return (
    <styled.HeaderWrapper>
      <Logo />
      <styled.Input onChange={handleChange} onKeyDown={handleKeyDown} value={value} placeholder="Search for anything" />
      <ButtonStyle onClick={handleClick} style={{ height: '100%' }}>
        <GeneralStyled variant="h2" color="#66666">
          <FontAwesomeIcon icon={faSearch} />
        </GeneralStyled>
      </ButtonStyle>
      <CardButtom />
    </styled.HeaderWrapper>
  );
};

export default Header;
