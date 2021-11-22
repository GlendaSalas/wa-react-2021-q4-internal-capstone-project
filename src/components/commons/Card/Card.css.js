import styled from 'styled-components';

const CardWrapper = styled.div`
  width: ${(props) => props.width}px;
  margin: 8px;
  border: 1px solid #fefefe;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 20px;
  background-color: white;
  border-radius: 20px;
`;

export default CardWrapper;
