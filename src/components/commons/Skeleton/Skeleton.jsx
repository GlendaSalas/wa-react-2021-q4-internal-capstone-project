/* eslint-disable react/prop-types */
import * as S from './Skeleton.css';
import React from 'react';

export const Skeleton = (props) => {
  return <S.SkeletonWrapper height={props.height} width={props.width} />;
};
