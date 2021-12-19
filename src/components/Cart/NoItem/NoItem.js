import { Link } from 'react-router-dom';
import NoCartImage from '../../../assets/cartempty.png';
import React from 'react';

import * as S from './NoItem.css';

const NoCartItems = () => {
  return (
    <S.NoCartItemsWrapper>
      <h1>
        Your cart is empty please browse in <Link to="/products">products</Link>
      </h1>
      <S.NoCartImage src={NoCartImage} />
    </S.NoCartItemsWrapper>
  );
};

export { NoCartItems };
