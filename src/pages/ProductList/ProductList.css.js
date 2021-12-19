import { BREAKPOINTS } from '../../utils/variables';
import styled from 'styled-components';

export const ProductListWrapper = styled.div`
  display: grid;
  grid-template-areas:
    'categories products'
    'categories products';

  @media ${BREAKPOINTS.DESKTOP} {
    grid-template-areas:
      'categories products'
      'categories products';

    grid-template-columns: 250px auto;
  }
`;

export const CategoriesFilterWrapper = styled.div`
  grid-area: categories;
  padding: 16px;
  position: sticky;
  top: 60px;
  background: white;
`;
export const ProductsWrapper = styled.div`
  grid-area: products;
  padding: 16px;
`;
export const PaginationWrapper = styled.div``;
