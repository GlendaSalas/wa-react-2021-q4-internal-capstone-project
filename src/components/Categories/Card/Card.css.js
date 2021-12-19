import { BREAKPOINTS } from '../../../utils/variables';
import styled from 'styled-components';

export const CategoryCardImage = styled.img`
  width: 100%;
  margin-bottom: 2px;
  @media ${BREAKPOINTS.MOBILE} {
    margin-bottom: 0px;
  }
`;

export const CategoryName = styled.h6`
  margin: 0 2px 2px 2px;
  @media ${BREAKPOINTS.MOBILE} {
    font-size: 10px;
    margin: 5px 10px 0px 10px;
  }
`;
