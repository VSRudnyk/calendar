import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { BsPlusLg } from 'react-icons/bs';
import {
  Container,
  TextWrapper,
  ArrowBtn,
  OpenForm,
  Month,
} from './Header.styled';

export const Header = ({
  today,
  prevMonth,
  nextMonth,
  openFormHandler,
  changeMonAndYear,
}) => {
  const monthToday = today.format('MMMM');
  const yearToday = today.format('YYYY');

  return (
    <Container>
      <OpenForm
        onClick={() => {
          openFormHandler('Save');
        }}
      >
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
        <DatePicker
          onChange={date => changeMonAndYear(date)}
          dateFormat="yyyy, MMM"
          showMonthYearPicker
        />
      </TextWrapper>
    </Container>
  );
};
