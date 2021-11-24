import React from 'react';
import {
  StyledLabel, StyledWrapper, StyledInputWrapper, StyledInput,
} from './TimeSlotsStyles';

const TimeSlots = function ({ data, value, onChange }) {
  return (
    <StyledWrapper>
      {data.map(({ time, isBooked }) => (
        <StyledInputWrapper key={time}>
          <StyledLabel
            htmlFor={time}
            checked={time === value}
            isBooked={isBooked}
          >
            {time}
          </StyledLabel>
          <StyledInput
            id={time}
            type="radio"
            name="time"
            value={time}
            onChange={onChange}
            disabled={isBooked}
            checked={time === value}
          />
        </StyledInputWrapper>
      ))}
    </StyledWrapper>
  );
};

export default TimeSlots;
