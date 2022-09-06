import moment from 'moment';
import { CalendarGrid } from './CalendarGrid';
import { Header } from './Header/Header';
import { Container } from './App.styled';

export const App = () => {
  moment.updateLocale('en', { week: { dow: 1 } });
  const today = moment();
  const startDay = today.clone().startOf('month').startOf('week');

  // const endDay = moment().endOf('month').endOf('week');

  // const calendar = [];
  // const day = startDay.clone();
  // while (!day.isAfter(endDay)) {
  //   calendar.push(day.clone());
  //   day.add(1, 'day');
  // }
  return (
    <Container>
      <Header today={today} />
      <CalendarGrid startDay={startDay} />
    </Container>
  );
};
