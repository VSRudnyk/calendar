import moment from 'moment';
import {
  GridContainer,
  CellWrapper,
  DayOfWeek,
  DayOfMounth,
  DayWrapper,
} from './CalendarGrid.styled';

// const storage = {
//   events: [
//     { id: 1, title: 'Go to the bed', description: 'Slowlly', date: 1662462763 },
//   ],
// };

export const CalendarGrid = ({ startDay, today }) => {
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
            <div>Event</div>
          </CellWrapper>
        );
      })}
    </GridContainer>
  );
};
