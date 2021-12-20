import styled from 'styled-components';

const buttom = styled.button`
  height: 100%;
  padding: 0 16px;
  color: #66666;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 21px;
  cursor: pointer;
  background: transparent;
  border: 0;

  &:hover {
    color: #5e5b5b;
  }
`;

const Badge = styled.div`
  height: 11px;
  width: 11px;
  font-size: 9px;
  border-radius: 12px;
  background: rgb(48 187 187);
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 6px;
  right: 0px;
`;

export { buttom as CartButtonWrapper, Badge };
