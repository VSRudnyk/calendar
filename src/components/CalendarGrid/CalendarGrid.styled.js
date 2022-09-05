import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
`;

export const CellWrapper = styled.div`
  min-width: 140px;
  min-height: 100px;
  border: 1px solid #747474;
  border-collapse: collapse;
  padding: 8px;
  display: flex;
  justify-content: space-between;
  background-color: ${props => (props.isWeekend ? '#d9d8d8' : '#ededed')};
`;
