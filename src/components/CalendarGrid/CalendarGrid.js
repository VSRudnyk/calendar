import moment from 'moment';
import {
  GridContainer,
  CellWrapper,
  WeekDay,
  DayOfMounth,
} from './CalendarGrid.styled';

export const CalendarGrid = ({ startDay }) => {
  // const totalDays = 42;
  const day = startDay.clone().subtract(1, 'day');
  const daysArray = [...Array(35)].map(() => day.add(1, 'day').clone());
  const currentDay = moment().date();

  return (
    <GridContainer>
      {daysArray.map(dayItem => {
        return (
          <CellWrapper
            key={dayItem}
            isCurrentDay={dayItem.date() === currentDay}
          >
            <DayOfMounth isWeekDay={dayItem.day() === 6 || dayItem.day() === 0}>
              {dayItem.format('D')}
            </DayOfMounth>
            <WeekDay isWeekDay={dayItem.day() === 6 || dayItem.day() === 0}>
              {dayItem.format('dd')}
            </WeekDay>
          </CellWrapper>
        );
      })}
    </GridContainer>
  );
};
