import styled from 'styled-components';

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

export const IdeaTitle = styled.div`
  font-size: 24px;
  font-weight: 500;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;

  padding: 15px;
`;

export const Input = styled.input`
  margin-bottom: 16px;
`;

export const InputDescription = styled.textarea`
  height: 100px;
  margin-bottom: 16px;
  resize: none;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DateWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Submit = styled.button`
  width: 70px;
`;
