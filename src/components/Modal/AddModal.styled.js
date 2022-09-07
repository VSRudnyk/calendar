import styled from 'styled-components';

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
  border-radius: 8px;
  overflow: hidden;
  width: 500px;
  background-color: white;
`;

export const Input = styled.input`
  padding: 4px 14px;
  width: 60%;

  outline: unset;
`;

// export const CloseBtn = styled.button`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 30px;
//   height: 30px;
//   cursor: pointer;
//   border-radius: 50%;
//   border: none;
//   position: absolute;
//   top: 16px;
//   right: 16px;
// `;

// export const IdeaTitle = styled.div`
//   font-size: 24px;
//   font-weight: 500;
// `;

// export const FormContainer = styled.form`
//   display: flex;
//   flex-direction: column;

//   padding: 15px;
// `;

// export const Input = styled.input`
//   margin-bottom: 16px;
// `;

// export const InputDescription = styled.textarea`
//   height: 100px;
//   margin-bottom: 16px;
//   resize: none;
// `;

// export const InputContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
// `;

// export const DateWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// export const Submit = styled.button`
//   width: 70px;
// `;
