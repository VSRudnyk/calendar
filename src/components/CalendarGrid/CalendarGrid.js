import moment from 'moment';
import {
  GridContainer,
  CellWrapper,
  WeekDay,
  DayOfMounth,
  DayWrapper,
} from './CalendarGrid.styled';

export const CalendarGrid = ({ startDay }) => {
  const day = startDay.clone().subtract(1, 'day');
  const daysArray = [...Array(35)].map(() => day.add(1, 'day').clone());
  const currentDay = moment().format('D M YYYY');
  console.log(currentDay);

  return (
    <GridContainer>
      {daysArray.map(dayItem => {
        return (
          <CellWrapper
            key={dayItem.unix()}
            isCurrentDay={dayItem.format('D M YYYY') === currentDay}
          >
            <DayWrapper>
              <DayOfMounth
                isWeekDay={dayItem.day() === 6 || dayItem.day() === 0}
              >
                {dayItem.format('D')}
              </DayOfMounth>
              <WeekDay isWeekDay={dayItem.day() === 6 || dayItem.day() === 0}>
                {dayItem.format('dd')}
              </WeekDay>
            </DayWrapper>
            <div>Event</div>
          </CellWrapper>
        );
      })}
    </GridContainer>
  );
};
