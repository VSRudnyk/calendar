import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TextWrapper = styled.div`
  margin: 16px 0 16px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ArrowBtn = styled.button`
  background-color: Transparent;
  border: none;
  cursor: pointer;
  overflow: hidden;
  padding: 5px 16px 0 8px;
`;

export const OpenForm = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #3096e7;
  width: 40px;
  height: 40px;
  cursor: pointer;
  border-radius: 50%;
  border: none;
`;

export const Month = styled.span`
  margin-right: 12px;
`;
