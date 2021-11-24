import React from 'react';
import { StyledHeading, StyledNumber, StyledWrapper } from './styles';
import TimeCalendar from './Calendar/Calendar';
import { InputError } from '../../../UserAuth/components/Input/InputStyles';

const SecondStep = function ({ stateProvider }) {
  return (
    <StyledWrapper>
      <StyledHeading>
        <StyledNumber>2</StyledNumber>
        Choose a day for an appointment
      </StyledHeading>
      <TimeCalendar
        name="day"
        onClickDay={(value) => stateProvider.setFieldValue('day', value)}
        value={stateProvider.values.day}
      />
      {stateProvider.touched.day && stateProvider.errors.day ? (
        <InputError>{stateProvider.errors.day}</InputError>
      ) : null}
    </StyledWrapper>
  );
};

export default SecondStep;
