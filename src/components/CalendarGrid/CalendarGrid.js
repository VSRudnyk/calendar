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

  return (
    <GridContainer>
      {daysArray.map((dayItem, i) => (
        <CellWrapper
          key={dayItem}
          isWeekend={dayItem.day() === 6 || dayItem.day() === 0}
        >
          <DayOfMounth>{dayItem.format('D')}</DayOfMounth>
          <WeekDay>{dayItem.format('dd')}</WeekDay>
        </CellWrapper>
      ))}
    </GridContainer>
  );
};
