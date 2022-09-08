import 'react-datepicker/dist/react-datepicker.css';
import { GrClose } from 'react-icons/gr';
import moment from 'moment';

import {
  FormPositionWrapper,
  FormWrapper,
  Input,
  CloseBtn,
  AccessBtn,
  Textarea,
  Label,
  TimeCreated,
} from './AddModal.styled';

export const AddModal = ({
  isOpen,
  event,
  closeMadal,
  changeEvent,
  method,
  eventSave,
}) => {
  return (
    <>
      {isOpen ? (
        <FormPositionWrapper onClick={closeMadal}>
          <FormWrapper onClick={e => e.stopPropagation()}>
            <h2>{method === 'Update' ? 'Edit' : 'Add new'} idea item</h2>
            <TimeCreated>
              {method === 'Update'
                ? `Created at: ${moment(event.date).format(
                    'DD.MM.YYYY HH:mm:ss'
                  )}
                    `
                : ''}
            </TimeCreated>
            <Label htmlFor="title">Title*</Label>
            <Input
              id="title"
              onChange={e => changeEvent(e.target.value, 'title')}
              value={event.title}
            />
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              onChange={e => changeEvent(e.target.value, 'description')}
              value={event.description}
            />
            <Label htmlFor="date">Date*</Label>
            <Input
              id="date"
              onChange={e => changeEvent(e.target.value, 'date')}
              value={event.date}
              type="datetime-local"
              style={{ width: '150px' }}
            />
            <CloseBtn onClick={closeMadal}>
              <GrClose />
            </CloseBtn>
            <AccessBtn onClick={eventSave}>{method}</AccessBtn>
          </FormWrapper>
        </FormPositionWrapper>
      ) : null}
    </>
  );
};
