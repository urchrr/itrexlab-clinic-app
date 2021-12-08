import React from 'react';
import moment from 'moment';
import {
  StyledLabel, StyledWrapper, StyledInputWrapper, StyledInput,
} from './TimeSlotsStyles';

const TimeSlots = function ({ dates, value, onChange }) {
  return (
    <StyledWrapper>
      {dates.map((date) => {
        const time = moment(date).format('hh:mm a');
        return (
          <StyledInputWrapper key={date}>
            <StyledLabel
              htmlFor={date}
              checked={date === value}
              isBooked={false}
            >
              {time}
            </StyledLabel>
            <StyledInput
              id={date}
              type="radio"
              name="date"
              value={date}
              onChange={onChange}
              disabled={false}
              checked={date === value}
            />
          </StyledInputWrapper>
        );
      })}
    </StyledWrapper>
  );
};

export default TimeSlots;
