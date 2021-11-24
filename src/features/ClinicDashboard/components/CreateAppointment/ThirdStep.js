import React from 'react';
import { StyledHeading, StyledNumber, StyledWrapper } from './styles';
import TimeSlots from './TimeSlots/TimeSlots';
import { InputError } from '../../../UserAuth/components/Input/InputStyles';
import getTimeSlots from './getTimeSlots';

const timeSlots = getTimeSlots();

const ThirdStep = function ({ stateProvider }) {
  return (
    <StyledWrapper>
      <StyledHeading>
        <StyledNumber>3</StyledNumber>
        Select an available timeslot
      </StyledHeading>
      <TimeSlots
        data={timeSlots}
        value={stateProvider.values.time}
        onChange={stateProvider.handleChange}
      />
      {stateProvider.touched.time && stateProvider.errors.time ? (
        <InputError>{stateProvider.errors.time}</InputError>
      ) : null}
    </StyledWrapper>
  );
};

export default ThirdStep;
