import moment from 'moment';
import { CalendarGrid } from './CalendarGrid';
import { Header } from './Header/Header';

export const App = () => {
  moment.updateLocale('en', { week: { dow: 1 } });
  const startDay = moment().startOf('month').startOf('week');
  const endDay = moment().endOf('month').endOf('week');

  const calendar = [];
  const day = startDay.clone();
  while (!day.isAfter(endDay)) {
    calendar.push(day.clone());
    day.add(1, 'day');
  }
  console.log(calendar);
  return (
    <>
      <Header />
      <CalendarGrid />
    </>
  );
};
