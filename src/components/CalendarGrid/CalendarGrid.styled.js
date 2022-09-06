import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
  gap: 1px;
`;

export const CellWrapper = styled.div`
  min-width: 140px;
  min-height: 100px;
  border: 1px solid #9d9d9d;
  border-collapse: collapse;
  border-radius: 8px;
  padding: 8px;
  display: flex;
  justify-content: space-between;
  background-color: ${props =>
    props.isCurrentDay ? '#3096e73b' : 'transparent'};
  &:hover {
    transform: scale(1.02);
  }
  transition: all 0.2s ease 0s;
`;

export const WeekDay = styled.div`
  color: ${props => (props.isWeekDay ? '#ff0000' : '#000')};
`;

export const DayOfMounth = styled.div`
  color: ${props => (props.isWeekDay ? '#ff0000' : '#3c4043')};
`;
