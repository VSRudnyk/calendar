import { useState } from 'react';
import moment from 'moment';
import { CalendarGrid } from './CalendarGrid';
import { Header } from './Header/Header';
import { Container } from './App.styled';

export const App = () => {
  const [today, setToday] = useState(moment());

  moment.updateLocale('en', { week: { dow: 1 } });

  const startDay = today.clone().startOf('month').startOf('week');

  const prevMonth = () => setToday(prev => prev.clone().subtract(1, 'month'));
  const nextMonth = () => setToday(prev => prev.clone().add(1, 'month'));

  return (
    <Container>
      <Header today={today} prevMonth={prevMonth} nextMonth={nextMonth} />
      <CalendarGrid startDay={startDay} today={today} />
    </Container>
  );
};
