import moment from 'moment';
import {
  GridContainer,
  CellWrapper,
  DayOfWeek,
  DayOfMounth,
  DayWrapper,
  EventListWrapper,
  EventItemWrapper,
} from './CalendarGrid.styled';

export const CalendarGrid = ({ startDay, today, totalDays, events }) => {
  const day = startDay.clone().subtract(1, 'day');
  const daysArray = [...Array(totalDays)].map(() => day.add(1, 'day').clone());
  const currentDay = moment().format('D M YYYY');
  const isSelectedMonth = day => today.isSame(day, 'month');

  return (
    <GridContainer>
      {daysArray.map(dayItem => {
        return (
          <CellWrapper
            key={dayItem.unix()}
            isCurrentDay={dayItem.format('D M YYYY') === currentDay}
          >
            <DayWrapper isSelectedMonth={isSelectedMonth(dayItem)}>
              <DayOfMounth>{dayItem.format('D')}</DayOfMounth>
              <DayOfWeek>{dayItem.format('dd')}</DayOfWeek>
            </DayWrapper>
            <EventListWrapper>
              {events
                .filter(
                  event =>
                    event.date >= dayItem.format('X') &&
                    event.date <= dayItem.clone().endOf('day').format('X')
                )
                .map(event => (
                  <li key={event.id}>
                    <EventItemWrapper>{event.title}</EventItemWrapper>
                  </li>
                ))}
            </EventListWrapper>
          </CellWrapper>
        );
      })}
    </GridContainer>
  );
};
