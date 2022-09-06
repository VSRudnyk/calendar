import { useState, useEffect } from 'react';
import moment from 'moment';
import { CalendarGrid } from './CalendarGrid';
import { Header } from './Header/Header';
import {
  Container,
  FormPositionWrapper,
  FormWrapper,
  EventTitle,
  EventBody,
  ButtonWrapper,
} from './App.styled';

const url = 'http://localhost:5000';
const totalDays = 42;
const defaultEvent = {
  title: '',
  description: '',
  date: moment().format('X'),
};

export const App = () => {
  const [today, setToday] = useState(moment());
  const [isShowForm, setIsShowForm] = useState(false);
  const [events, setEvents] = useState([]);
  const [event, setEvent] = useState(null);
  const [method, setMethod] = useState(null);
  moment.updateLocale('en', { week: { dow: 1 } });

  const startDay = today.clone().startOf('month').startOf('week');

  const prevMonth = () => setToday(prev => prev.clone().subtract(1, 'month'));
  const nextMonth = () => setToday(prev => prev.clone().add(1, 'month'));

  const startDateQuery = startDay.clone().format('X');
  const endDateQure = startDay.clone().add(totalDays, 'days').format('X');
  useEffect(() => {
    fetch(`${url}/events?date_gte=${startDateQuery}&date_lte=${endDateQure}`)
      .then(res => res.json())
      .then(res => {
        setEvents(res);
      });
  }, [endDateQure, startDateQuery, today]);

  const openFormHandler = (methodName, eventForUpdate) => {
    console.log(methodName);
    setIsShowForm(true);
    setEvent(eventForUpdate || defaultEvent);
    setMethod(methodName);
  };

  const closeForm = () => {
    setIsShowForm(false);
    setEvent(null);
  };

  const changEventHandler = (text, field) => {
    setEvent(prevState => ({
      ...prevState,
      [field]: text,
    }));
  };

  return (
    <>
      {isShowForm ? (
        <FormPositionWrapper onClick={closeForm}>
          <FormWrapper onClick={e => e.stopPropagation()}>
            <EventTitle
              onChange={e => changEventHandler(e.target.value, 'title')}
              value={event.title}
            />
            <EventBody
              onChange={e => changEventHandler(e.target.value, 'description')}
              value={event.description}
            />
            <ButtonWrapper>
              <button onClick={closeForm}>Cancel</button>
              <button>{method}</button>
            </ButtonWrapper>
          </FormWrapper>
        </FormPositionWrapper>
      ) : null}
      <Container>
        <Header
          today={today}
          prevMonth={prevMonth}
          nextMonth={nextMonth}
          openFormHandler={openFormHandler}
        />
        <CalendarGrid
          startDay={startDay}
          today={today}
          totalDays={totalDays}
          events={events}
          openFormHandler={openFormHandler}
        />
      </Container>
    </>
  );
};
