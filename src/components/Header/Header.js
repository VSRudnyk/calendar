import { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { BsPlusLg } from 'react-icons/bs';
import { GrClose } from 'react-icons/gr';
import Modal from 'react-modal';
import { useFormik } from 'formik';
import {
  Container,
  TextWrapper,
  ArrowBtn,
  OpenForm,
  Month,
  CloseBtn,
  IdeaTitle,
  FormContainer,
  Input,
  InputDescription,
  InputContainer,
  DateWrapper,
  Submit,
} from './Header.styled';

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

export const Header = ({ today, prevMonth, nextMonth }) => {
  const [isOpen, setIsOpen] = useState(false);
  const monthToday = today.format('MMMM');
  const yearToday = today.format('YYYY');

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

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
    <Container>
      <OpenForm onClick={toggleModal}>
        <BsPlusLg fill="white" />
      </OpenForm>
      <TextWrapper>
        <ArrowBtn>
          <IoIosArrowBack onClick={prevMonth} />
        </ArrowBtn>
        <Month>{monthToday}</Month>
        <span>{yearToday}</span>
        <ArrowBtn>
          <IoIosArrowForward onClick={nextMonth} />
        </ArrowBtn>
      </TextWrapper>
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
    </Container>
  );
};
