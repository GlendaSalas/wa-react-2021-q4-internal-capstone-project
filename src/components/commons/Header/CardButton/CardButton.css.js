import styled from 'styled-components';

const buttom = styled.button`
  height: 100%;
  padding: 0 16px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 21px;
  cursor: pointer;
  background: transparent;
  border: 0;

  &:hover {
    color: #efefef;
  }
`;

export { buttom as CartButtonWrapper };
