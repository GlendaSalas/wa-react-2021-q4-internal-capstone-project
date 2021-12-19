import styled from 'styled-components';

export const CartItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  border-bottom: 1px dotted #d6e4e4;
  padding: 16px;
  box-sizing: border-box;
  flex-wrap: wrap;
`;

export const CartItemImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductWrapper = styled.div`
  display: flex;
  width: 70%;
`;

export const CartItemImage = styled.img`
  width: 100px;
`;

export const CartProductInfo = styled.div`
  padding: 16px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const CartItemSubTotal = styled.div`
  display: flex;
  align-items: center;
`;

export const Select = styled.select`
  margin-right: 0.2em;
  margin-left: 0.2em;
  height: 30px;
  width: 30px;
`;
