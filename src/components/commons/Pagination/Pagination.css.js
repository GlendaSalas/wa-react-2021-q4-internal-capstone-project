import { BREAKPOINTS } from '../../../utils/variables';
import styled from 'styled-components';

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  @media ${BREAKPOINTS.MOBILE} {
    display: table;
  }
`;

export const ItemWrapper = styled.div`
  padding: 20px;
  color: #1c1919;
  font-size: 10px;
  font-family: arial;
  background-color: ${(props) => (props.selected ? 'rgb(247 227 224)' : 'transparent')};
  color: ${(props) => (props.selected ? '#060606' : 'black')};
`;
