import styled from 'styled-components';
export const HeaderWrapper = styled.header`
  background: #d6e4e4;
  width: 100%;
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: row;
  height: 50px;
  align-items: center;
  justify-content: space-between;
  box-shadow: 1px 4px 10px rgba(141, 127, 127, 0.5);
  z-index: 1;
`;

export const Input = styled.input`
  border: 0px;
  border-radius: 8px;
  height: 15px;
  width: 50%;
  margin-left: 8px;
  margin-right: 8px;
  padding: 8px;
  outline: 0;
  direction: ltr;
`;
