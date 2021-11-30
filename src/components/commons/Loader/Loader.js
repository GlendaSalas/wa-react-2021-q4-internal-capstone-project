import * as S from './Loader.css';
import LoadingImage from '../../../assets/loading.gif';
import React from 'react';

const LoadingView = () => {
  return (
    <S.LoadingWrapper>
      <S.LoadingInner>
        <img src={LoadingImage} alt="loading" height="96" width="96" />
      </S.LoadingInner>
    </S.LoadingWrapper>
  );
};

export default LoadingView;
