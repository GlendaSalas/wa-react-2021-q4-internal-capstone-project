import { BREAKPOINTS } from '../../utils/variables';
import styled from 'styled-components';

export const Title = styled.h1`
  margin: 10px;
  text-align: center;
  font-family: arial;

  @media ${BREAKPOINTS.MOBILE} {
    font-size: 20px;
    margin: 5px;
  }
`;
export const CategoriesWrapper = styled.div`
  padding: 16px 0;
`;
