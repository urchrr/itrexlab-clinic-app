import React from 'react';
import { format } from 'date-fns';
import { StyledHeading, StyledNumber, StyledWrapper } from './styles';
import TimeCalendar from './Calendar/Calendar';
import { InputError } from '../../../UserAuth/components/Input/InputStyles';

const SecondStep = function ({
  stateProvider: {
    values: {
      // eslint-disable-next-line no-unused-vars
      day, occupation, reason, doctor,
    },
    errors,
    touched,
    setFieldValue,
  },
}) {
  const date = (value) => format(value, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");

  return (
    <StyledWrapper>
      <StyledHeading>
        <StyledNumber>2</StyledNumber>
        Choose a day for an appointment
      </StyledHeading>
      <TimeCalendar
        blocked={!(doctor !== '' && occupation !== '' && reason !== '')}
        name="day"
        onClickDay={(value) => setFieldValue('day', date(value))}
        // value={day}
      />
      {touched.day && errors.day ? (
        <InputError>{errors.day}</InputError>
      ) : null}
    </StyledWrapper>
  );
};

export default SecondStep;
