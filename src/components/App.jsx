import { useState, useEffect } from 'react';
import moment from 'moment';
import { CalendarGrid } from './CalendarGrid';
import { Header } from './Header/Header';
import { Container } from './App.styled';

const url = 'http://localhost:5000';
const totalDays = 42;

export const App = () => {
  const [today, setToday] = useState(moment());

  moment.updateLocale('en', { week: { dow: 1 } });

  const startDay = today.clone().startOf('month').startOf('week');

  const prevMonth = () => setToday(prev => prev.clone().subtract(1, 'month'));
  const nextMonth = () => setToday(prev => prev.clone().add(1, 'month'));

  const [events, setEvents] = useState([]);
  console.log(events);
  const startDateQuery = startDay.clone().format('X');
  const endDateQure = startDay.clone().add(totalDays, 'days').format('X');
  useEffect(() => {
    fetch(`${url}/events?date_gte=${startDateQuery}&date_lte=${endDateQure}`)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        setEvents(res);
      });
  }, [endDateQure, startDateQuery]);

  return (
    <Container>
      <Header today={today} prevMonth={prevMonth} nextMonth={nextMonth} />
      <CalendarGrid startDay={startDay} today={today} totalDays={totalDays} />
    </Container>
  );
};
