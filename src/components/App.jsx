import { useState, useEffect } from 'react';
import moment from 'moment';
import { useFormik } from 'formik';
import { v4 as uuidv4 } from 'uuid';
import { CalendarGrid } from './CalendarGrid';
import { Header } from './Header/Header';
import { Container } from './App.styled';
import { FormModal } from './Modal/Modal';

export const App = () => {
  const [today, setToday] = useState(moment());
  const [isOpen, setIsOpen] = useState(false);
  const [event, setEvent] = useState();
  const [events, setEvents] = useState(() => {
    return JSON.parse(localStorage.getItem('events')) ?? [];
  });
  const [isUpdate, setIsUpdate] = useState(false);

  const defaultEvent = {
    title: '',
    description: '',
    date: '',
  };

  const toggleModal = eventFromForm => {
    setIsOpen(!isOpen);
    setEvent(eventFromForm || defaultEvent);
  };

  const togleIsUpdate = () => {
    setIsUpdate(true);
  };

  const changEventHandler = (text, field) => {
    setEvent(prevState => ({
      ...prevState,
      [field]: text,
    }));
  };

  const formik = useFormik({
    initialValues: {
      id: uuidv4(),
      title: '',
      description: '',
      date: '',
    },
    onSubmit: (values, { resetForm }) => {
      const convertDate = moment(values.date).unix();
      setEvents(prevState => [...prevState, { ...values, date: convertDate }]);
      resetForm();
      toggleModal();
    },
  });

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
        toggleModal={toggleModal}
      />
      <FormModal
        formik={formik}
        isOpen={isOpen}
        toggleModal={toggleModal}
        isUpdate={isUpdate}
        event={event}
        changEventHandler={changEventHandler}
      />
      <CalendarGrid
        startDay={startDay}
        today={today}
        events={events}
        toggleModal={toggleModal}
        togleIsUpdate={togleIsUpdate}
      />
    </Container>
  );
};
