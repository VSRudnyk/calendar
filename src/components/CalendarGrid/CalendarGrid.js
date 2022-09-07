import moment from 'moment';
import {
  GridContainer,
  CellWrapper,
  DayOfWeek,
  DayOfMounth,
  DayWrapper,
  EventListWrapper,
  EventItemWrapper,
  Item,
} from './CalendarGrid.styled';

export const CalendarGrid = ({ startDay, today, events, openFormHandler }) => {
  const day = startDay.clone().subtract(1, 'day');
  const daysArray = [...Array(35)].map(() => day.add(1, 'day').clone());
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
                    moment(event.date).unix() >= dayItem.format('X') &&
                    moment(event.date).unix() <=
                      dayItem.clone().endOf('day').format('X')
                )
                .map(event => (
                  <Item key={event.id}>
                    <EventItemWrapper
                      onClick={() => {
                        openFormHandler('Update', event);
                      }}
                    >
                      {event.title}
                    </EventItemWrapper>
                  </Item>
                ))}
            </EventListWrapper>
          </CellWrapper>
        );
      })}
    </GridContainer>
  );
};
