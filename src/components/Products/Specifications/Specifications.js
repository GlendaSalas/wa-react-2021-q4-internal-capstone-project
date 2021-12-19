/* eslint-disable react/prop-types */
import React from 'react';
import Styles from '../../commons/StylesGeneral/StylesG';

import * as S from './Specifications.css.js';

const ProductSpecs = (props) => {
  return (
    <S.ProductSpecs>
      <Styles variant="h4">Specs</Styles>
      <S.Table>
        <S.TR>
          <th>Spec name</th>
          <th>Spec value</th>
        </S.TR>
        {props.product.specs?.map((spec) => (
          <S.TR>
            <td>{spec.specName}</td> <td>{spec.specValue}</td>
          </S.TR>
        ))}
      </S.Table>
    </S.ProductSpecs>
  );
};
export { ProductSpecs };
