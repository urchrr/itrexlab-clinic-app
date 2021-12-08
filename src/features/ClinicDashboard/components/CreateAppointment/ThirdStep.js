import React from 'react';
import { freeTimeVisitSelector } from 'services/redux/doctors/selectors';
import { useSelector } from 'react-redux';
import { StyledHeading, StyledNumber, StyledWrapper } from './styles';
import TimeSlots from './TimeSlots/TimeSlots';
import { InputError } from '../../../UserAuth/components/Input/InputStyles';

const ThirdStep = function ({
  stateProvider: {
    values, handleChange, errors, touched,
  },
}) {
  const timeSlots = useSelector(freeTimeVisitSelector);
  return (
    <StyledWrapper blocked={values.day === ''}>
      <StyledHeading>
        <StyledNumber>3</StyledNumber>
        Select an available timeslot
      </StyledHeading>
      <TimeSlots
        dates={timeSlots}
        value={values.date}
        onChange={handleChange}
      />
      {touched.date && errors.date ? (
        <InputError>{errors.date}</InputError>
      ) : null}
    </StyledWrapper>
  );
};

export default ThirdStep;
