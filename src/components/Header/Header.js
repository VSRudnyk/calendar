import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import 'react-datepicker/dist/react-datepicker.css';
import { BsPlusLg } from 'react-icons/bs';

import {
  Container,
  TextWrapper,
  ArrowBtn,
  OpenForm,
  Month,
  DateInput,
  DateInputWrapper,
  Icon,
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
        <DateInputWrapper>
          <Icon />
          <DateInput
            onChange={date => changeMonAndYear(date)}
            dateFormat="yyyy, MMM"
            showMonthYearPicker
          />
        </DateInputWrapper>
      </TextWrapper>
    </Container>
  );
};
