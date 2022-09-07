import { FormPositionWrapper, FormWrapper, Input } from './AddModal.styled';

export const AddModal = ({
  isOpen,
  event,
  closeMadal,
  changeEvent,
  method,
  eventSave,
}) => {
  return (
    <>
      {isOpen ? (
        <FormPositionWrapper onClick={closeMadal}>
          <FormWrapper onClick={e => e.stopPropagation()}>
            <Input
              onChange={e => changeEvent(e.target.value, 'title')}
              value={event.title}
            />
            <Input
              onChange={e => changeEvent(e.target.value, 'description')}
              value={event.description}
            />
            <Input
              onChange={e => changeEvent(e.target.value, 'date')}
              value={event.date}
              type="datetime-local"
            />
            <button onClick={closeMadal}>Cancel</button>
            <button onClick={eventSave}>{method}</button>
          </FormWrapper>
        </FormPositionWrapper>
      ) : null}
    </>
  );
};

// import Modal from 'react-modal';
// import { GrClose } from 'react-icons/gr';

// import {
//   CloseBtn,
//   IdeaTitle,
//   FormContainer,
//   Input,
//   InputDescription,
//   InputContainer,
//   DateWrapper,
//   Submit,
// } from './Modal.styled';

// Modal.setAppElement('#root');

// const customStyles = {
//   content: {
//     width: '450px',
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',
//   },
// };

// export const AddModal = ({
//   formik,
//   isOpen,
//   toggleModal,
//   // isUpdate,
//   // event,
//   // changEventHandler,
// }) => {
//   return (
//     <Modal
//       isOpen={isOpen}
//       onRequestClose={toggleModal}
//       contentLabel="My dialog"
//       style={customStyles}
//     >
//       <IdeaTitle>Add new idea item</IdeaTitle>
//       <CloseBtn onClick={toggleModal}>
//         <GrClose />
//       </CloseBtn>

//       <FormContainer onSubmit={formik.handleSubmit}>
//         <label htmlFor="title">Title</label>
//         <Input
//           id="title"
//           name="title"
//           type="text"
//           required
//           onChange={formik.handleChange}
//           value={formik.values.title || 'test'}
//           // onChange={
//           //   isUpdate
//           //     ? e => changEventHandler(e.target.value, 'title')
//           //     : formik.handleChange
//           // }
//           // value={isUpdate ? event.title : formik.values.title}
//         />
//         <label htmlFor="description">Description</label>
//         <InputDescription
//           id="description"
//           name="description"
//           type="text"
//           onChange={formik.handleChange}
//           value={formik.values.description}
//         />
//         <InputContainer>
//           <DateWrapper>
//             <label htmlFor="date">Date</label>
//             <Input
//               id="date"
//               name="date"
//               type="datetime-local"
//               required
//               onChange={formik.handleChange}
//               value={formik.values.date}
//             />
//           </DateWrapper>
//         </InputContainer>

//         <Submit type="submit">Submit</Submit>
//       </FormContainer>
//     </Modal>
//   );
// };
