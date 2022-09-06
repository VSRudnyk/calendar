import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 15px 0 15px;
`;

export const FormPositionWrapper = styled.div`
  position: absolute;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.35);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormWrapper = styled.div`
  width: 200px;
  background-color: #1e1f21;
  color: #dddddd;
`;

export const EventTitle = styled.input`
  padding: 4px 14px;
  font-size: 16px;
  width: 100%;
  border: unset;
  background-color: #1e1f21;
  color: #dddddd;
  outline: unset;
  border-bottom: 1px solid #464648;
`;

export const EventBody = styled.input`
  padding: 4px 14px;
  font-size: 16px;
  width: 100%;
  border: unset;
  background-color: #1e1f21;
  color: #dddddd;
  outline: unset;
  border-bottom: 1px solid #464648;
`;

export const ButtonWrapper = styled.div`
  padding: 8px 14px;
  display: flex;
  justify-content: flex-end;
`;
