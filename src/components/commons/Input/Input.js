/* eslint-disable react/prop-types */
import React from 'react';

import * as S from './Input.css';

const Input = (props) => {
  return <S.Input onChange={props.onChange} value={props.value} placeholder={props.placeholder} name={props.name} />;
};
export { Input };
