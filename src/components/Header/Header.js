import {
  Container,
  TextWrapper,
  ArrowBtn,
  OpenForm,
  Month,
} from './Header.styled';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { BsPlusLg } from 'react-icons/bs';

export const Header = ({ today }) => {
  const monthToday = today.format('MMMM');
  const yearToday = today.format('YYYY');

  return (
    <Container>
      <OpenForm>
        <BsPlusLg fill="white" />
      </OpenForm>
      <TextWrapper>
        <ArrowBtn>
          <IoIosArrowBack />
        </ArrowBtn>
        <Month>{monthToday}</Month>
        <span>{yearToday}</span>
        <ArrowBtn>
          <IoIosArrowForward />
        </ArrowBtn>
      </TextWrapper>
    </Container>
  );
};
