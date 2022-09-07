import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { BsPlusLg } from 'react-icons/bs';
import {
  Container,
  TextWrapper,
  ArrowBtn,
  OpenForm,
  Month,
} from './Header.styled';

export const Header = ({ today, prevMonth, nextMonth, toggleModal }) => {
  const monthToday = today.format('MMMM');
  const yearToday = today.format('YYYY');

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
    </Container>
  );
};
