import React from 'react';
import moment from 'moment';
import { useFormikContext } from 'formik';
import {
  StyledLabel, StyledWrapper, StyledInputWrapper, StyledInput,
} from './TimeSlotsStyles';
import { CreateAppointmentFormValues } from '../../../../../types/appointments';

type TimesSlotsProps = {
  dates: string[],
  value:string
};
const TimeSlots = function ({ dates, value }:TimesSlotsProps) {
  const { handleChange } = useFormikContext<CreateAppointmentFormValues>();
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
              onChange={handleChange}
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
