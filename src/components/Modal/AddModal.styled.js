import styled from 'styled-components';

export const FormPositionWrapper = styled.div`
  position: fixed;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.35);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const FormWrapper = styled.div`
  position: absolute;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 32px;
  background-color: white;
`;

export const Label = styled.label`
  color: #a5a5a5;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  height: 25px;
  padding: 4px 14px;
  margin-bottom: 24px;
  border: 1px solid #a5a5a5;
  outline: none;
  border-radius: 8px;
`;

export const Textarea = styled.textarea`
  resize: none;
  height: 70px;
  padding: 4px 14px;
  margin-bottom: 24px;
  border: 1px solid #a5a5a5;
  outline: none;
  border-radius: 8px;
`;

export const CloseBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  cursor: pointer;
  border-radius: 50%;
  border: none;
  position: absolute;
  top: 16px;
  right: 16px;
`;

export const AccessBtn = styled.button`
  border: unset;
  border-radius: 8px;
  height: 35px;
  background-color: #3096e7;
  color: #fff;
`;

export const TimeCreated = styled.span`
  color: #a5a5a5;
  margin-bottom: 12px;
`;
