import { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { BsPlusLg } from 'react-icons/bs';
import { AddModal } from 'components/Modal/Modal';
import {
  Container,
  TextWrapper,
  ArrowBtn,
  OpenForm,
  Month,
} from './Header.styled';

export const Header = ({ today, prevMonth, nextMonth }) => {
  const [isOpen, setIsOpen] = useState(false);
  const monthToday = today.format('MMMM');
  const yearToday = today.format('YYYY');

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <OpenForm onClick={toggleModal}>
        <BsPlusLg fill="white" />
      </OpenForm>
      <TextWrapper>
        <Month>{monthToday}</Month>
        <span>{yearToday}</span>
        <ArrowBtn>
          <IoIosArrowBack onClick={prevMonth} />
        </ArrowBtn>
        <ArrowBtn>
          <IoIosArrowForward onClick={nextMonth} />
        </ArrowBtn>
      </TextWrapper>
      <AddModal isOpen={isOpen} toggleModal={toggleModal} />
    </Container>
  );
};
