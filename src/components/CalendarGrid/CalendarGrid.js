import { GridContainer, CellWrapper } from './CalendarGrid.styled';

export const CalendarGrid = ({ startDay }) => {
  // const totalDays = 42;
  const day = startDay.clone().subtract(1, 'day');
  const daysArray = [...Array(35)].map(() => day.add(1, 'day').clone());
  console.log(daysArray);
  return (
    <GridContainer>
      {daysArray.map((dayItem, i) => (
        <CellWrapper
          key={dayItem}
          isWeekend={dayItem.day() === 6 || dayItem.day() === 0}
        >
          <div>{dayItem.format('D')}</div>
          <div>{dayItem.format('dd')}</div>
        </CellWrapper>
      ))}
    </GridContainer>
  );
};
