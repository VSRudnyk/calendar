import { useState, useEffect } from 'react';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import { CalendarGrid } from './CalendarGrid';
import { Header } from './Header';
import { Container } from './App.styled';
import { AddModal } from './Modal';

const defaultEvent = {
  id: uuidv4(),
  title: '',
  description: '',
  date: '',
};

export const App = () => {
  const [today, setToday] = useState(moment());
  const [isOpen, setIsOpen] = useState(false);
  const [event, setEvent] = useState(null);
  const [method, setMethod] = useState(null);
  const [events, setEvents] = useState(() => {
    return JSON.parse(localStorage.getItem('events')) ?? [];
  });

  console.log(today);

  const openFormHandler = (methodName, eventForUpdate) => {
    setEvent(eventForUpdate || defaultEvent);
    setIsOpen(true);
    setMethod(methodName);
  };

  const closeMadal = () => {
    setIsOpen(false);
    setEvent(null);
  };

  const changeEvent = (text, field) => {
    setEvent(prevState => ({
      ...prevState,
      [field]: text,
    }));
  };

  const changeMonAndYear = data => {
    console.log(data);
    setToday(prev => prev.clone().subtract(5, 'month'));
  };

  const eventSave = () => {
    if (method === 'Update') {
      setEvents(prevState =>
        prevState.map(eventElement =>
          eventElement.id === event.id ? event : eventElement
        )
      );
    } else {
      setEvents(prevState => [...prevState, event]);
    }
    closeMadal();
  };

  useEffect(() => {
    localStorage.setItem('events', JSON.stringify(events));
  }, [events]);

  moment.updateLocale('en', { week: { dow: 1 } });

  const startDay = today.clone().startOf('month').startOf('week');

  const prevMonth = () => setToday(prev => prev.clone().subtract(1, 'month'));
  const nextMonth = () => setToday(prev => prev.clone().add(1, 'month'));

  return (
    <Container>
      <Header
        today={today}
        prevMonth={prevMonth}
        nextMonth={nextMonth}
        openFormHandler={openFormHandler}
        changeMonAndYear={changeMonAndYear}
      />
      <AddModal
        isOpen={isOpen}
        event={event}
        changeEvent={changeEvent}
        closeMadal={closeMadal}
        method={method}
        eventSave={eventSave}
      />
      <CalendarGrid
        startDay={startDay}
        today={today}
        events={events}
        openFormHandler={openFormHandler}
      />
    </Container>
  );
};
