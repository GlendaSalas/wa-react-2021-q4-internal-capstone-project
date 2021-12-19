import { BREAKPOINTS } from '../../../utils/variables';
import styled from 'styled-components';

export const CategoriesFilterContainerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  @media ${BREAKPOINTS.DESKTOP} {
    flex-direction: column;
  }
`;
export const CategoriesFilterItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media ${BREAKPOINTS.DESKTOP} {
    flex-direction: column;
  }
`;
export const CategoriesFiltersButtonWrapper = styled.div`
  padding: 8px 0;
  display: flex;
  align-items: left;
  justify-content: left;
  flex-direction: column;
  text-align: left;
  @media ${BREAKPOINTS.DESKTOP} {
    padding: 16px 0;
  }
`;
export const CategorySelected = styled.span`
  font-size: 10px;
  font-weight: 700;
  color: rgb(159 146 165);
  text-align: left;
`;
