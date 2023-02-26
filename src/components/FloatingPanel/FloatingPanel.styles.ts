import styled from '@emotion/styled';

export const Container = styled.div`
  position: fixed;
  z-index: 999999;

  color: white;

  left: calc(100% - 120px);
  top: 15px;
  
  width: 100px;
  height: 100px;

  border: 1px solid black;
  text-align: center;
  background-color: rgba(0,0,0,0.25);
`;