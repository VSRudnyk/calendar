import Modal from 'react-modal';
import { useFormik } from 'formik';
import { GrClose } from 'react-icons/gr';
import {
  CloseBtn,
  IdeaTitle,
  FormContainer,
  Input,
  InputDescription,
  InputContainer,
  DateWrapper,
  Submit,
} from './Modal.styled';

Modal.setAppElement('#root');

const customStyles = {
  content: {
    width: '450px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export const AddModal = ({ isOpen, toggleModal }) => {
  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      date: '',
      time: '',
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    },
  });

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={toggleModal}
      contentLabel="My dialog"
      style={customStyles}
    >
      <IdeaTitle>Add new idea item</IdeaTitle>
      <CloseBtn onClick={toggleModal}>
        <GrClose />
      </CloseBtn>

      <FormContainer onSubmit={formik.handleSubmit}>
        <label htmlFor="title">Title</label>
        <Input
          id="title"
          name="title"
          type="text"
          required
          onChange={formik.handleChange}
          value={formik.values.title}
        />
        <label htmlFor="description">Description</label>
        <InputDescription
          id="description"
          name="description"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.description}
        />
        <InputContainer>
          <DateWrapper>
            <label htmlFor="date">Date</label>
            <Input
              id="date"
              name="date"
              type="date"
              required
              onChange={formik.handleChange}
              value={formik.values.date}
            />
          </DateWrapper>
          <DateWrapper>
            <label htmlFor="time">Time</label>
            <Input
              id="time"
              name="time"
              type="time"
              onChange={formik.handleChange}
              value={formik.values.time}
            />
          </DateWrapper>
        </InputContainer>

        <Submit type="submit">Submit</Submit>
      </FormContainer>
    </Modal>
  );
};
