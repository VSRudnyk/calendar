import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import { BsCalendar3 } from 'react-icons/bs';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TextWrapper = styled.div`
  margin: 16px 0 16px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ArrowBtn = styled.button`
  background-color: Transparent;
  border: none;
  cursor: pointer;
  overflow: hidden;
  padding: 5px 8px 0 8px;
  margin: 0 5px 0 5px;
`;

export const OpenForm = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #3096e7;
  width: 40px;
  height: 40px;
  cursor: pointer;
  border-radius: 50%;
  border: none;
`;

export const Month = styled.span`
  margin-right: 12px;
`;

export const DateInputWrapper = styled.div`
  position: relative;
`;

export const DateInput = styled(DatePicker)`
  margin-right: 5px;
  width: 50px;
  background-color: transparent;
  border: unset;
  outline: unset;
  caret-color: transparent;
  cursor: pointer;
`;

export const Icon = styled(BsCalendar3)`
  position: absolute;
  bottom: 0;
  right: 27px;
`;
