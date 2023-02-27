import styled from '@emotion/styled';

export const Container = styled.div`
  position: fixed;
  z-index: 99;

  left: calc(100% - 120px);
  top: 15px;
  
  width: auto;
  height: auto;

  padding: 10px;

  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  box-sizing: border-box;
  color: white;
  border: 1px solid black;
  text-align: center;
  background-color: rgba(0,0,0,0.25);
`;